import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';

import api from '../services/api';

import { Data } from '../types/interfaces'

import '../styles/global.css';
import '../styles/pages/landing.css';
import '../styles/layout/modal.css';

import img from '../assets/images/search.svg';

export default function Landing(){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [code, setCode] = useState("");
    const [cardapio, setCardapio] = useState<Data>();
    
    async function handlesSearch(){
        if(code === ""){
            alert('Informe um código para realizar a busca!!');
        } 
        else{
            console.log('Busacando pelo restaurante de código: ',code);
        
            const response = await api.get(`/?code=${code}`)
                .then(res => {
                    setCardapio(res.data.data)
                    console.log(res.data.data)
                });
    
            setModalIsOpen(true);
        }       
    }

    return(
        <div id="landing-page">
            
            <div id="content-wrapper">

                <div className="input-form">
                    <div className="title">
                        <h1>Bem-vindo!</h1>
                    </div>

                    <form>
                        <label htmlFor="fname">Informe o código do restaurante que deseja consultar: </label>

                        <br/>

                        <input type="text" id="fname" onChange={event => setCode(event.target.value)}/>
                        
                        <br/>
                    </form>

                    <button type="submit" className="btn-consultar" onClick={handlesSearch}>
                            <AiOutlineSearch color="#fff" size={15}/>
                            Consultar
                    </button>
                </div>
                
                <div className="search-img">
                    <img src={img} alt="search-img"/>
                </div>

                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false}>

                    <div className="cardapio">
                        <h1>Cardápio: </h1>

                            {cardapio?.menu.map(menu => (
                                <div id="menu">
                                    <h2 className="title">{menu.name}, id: {menu.code}</h2>

                                    <ul id="items">
                                        {menu.itens.map(item => (
                                            <li>
                                                <h3>{item.description}</h3>
                                                <p>{item.details}</p>

                                                <ul id="variations">
                                                    {item.choices.map(choice => (
                                                        <li>{choice.name}</li>
                                                    ))}
                                                </ul>

                                                    <h3>Preço: {item.unitPrice}</h3>                                                
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                    </div>

                    <button id="btn-close" onClick={() => setModalIsOpen(false)}>
                        <AiOutlineClose color="#fff" size={15}/>
                        Fechar
                    </button>
                </Modal>
            </div>

        </div>
    );
}