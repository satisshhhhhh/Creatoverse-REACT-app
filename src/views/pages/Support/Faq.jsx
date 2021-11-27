import React from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'

import useDocumentTitle from '../../../components/useDocumentTitle'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import HeroQuestions from '../../../components/hero/HeroQuestions';
import { Link } from 'react-router-dom';


const FaqContent = [
    {
        title: "How does the free trial work?",
        desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
        expand: "a",
    },
    {
        title: "How do you weigh different criteria in your process?",
        desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
        expand: "b",
    },
    {
        title: " What does First Round look for in an idea?",
        desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
        expand: "c",
    },
    {
        title: "	What do you look for in a founding team?",
        desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
        expand: "d",
    },
    {
        title: " Do you recommend Pay as you go or Pre pay?",
        desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
        expand: "e",
    },
    {
        title: " Can I pass the fees on to my customers?",
        desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
        expand: "f",
    },
    {
        title: "Roem ipsum dummy  here will some questions?",
        desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
        expand: "g",
    },
];


const Faq = () => {
    useDocumentTitle(
        "Faq"
    );
    return (

        <div>
            <Header />
            <HeroQuestions />
            <div>
                <div className="questions__page mt-100">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-4">
                                    <div className="box side">
                                        <div className="sidenav">
                                            <ul>
                                                <li className="d-flex align-items-center space-x-10">
                                                    <i className="ri-home-2-line" />
                                                    <Link className="text__reset" to="#General">General</Link>
                                                </li>
                                                <li className="d-flex align-items-center space-x-10">
                                                    <i className="ri-chat-1-line" />
                                                    <Link className="text__reset" to="#Support">Support</Link>
                                                </li>
                                                <li className="d-flex align-items-center space-x-10">
                                                    <i className="ri-cloudy-line" />
                                                    <Link className="text__reset" to="#Transaction">Transaction</Link>
                                                </li>
                                                <li className="d-flex align-items-center space-x-10">
                                                    <i className="ri-quill-pen-line" />
                                                    <Link className="text__reset" to="#Fees">Fees</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-8">
                                    <div className="questions__box space-y-30">
                                        <Accordion className="ff" preExpanded={["b"]} allowZeroExpanded>
                                            {FaqContent.map((item, i) => (
                                                <AccordionItem className="accordion p-30 mb-20" key={i} uuid={item.expand}>
                                                    <AccordionItemHeading className="accordion-header p-0" >
                                                        <AccordionItemButton>
                                                            <button className="accordion-button">
                                                                {item.title}
                                                            </button>

                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    {/* Accordion Heading */}
                                                    <AccordionItemPanel>
                                                        <p className="accordion-desc">{item.desc}</p>
                                                    </AccordionItemPanel>
                                                    {/* Accordion Body Content */}
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Faq
