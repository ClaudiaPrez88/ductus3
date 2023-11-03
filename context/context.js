"use client";
const type = {
  ANIMATION: "ANIMATION",
  MODAL: "MODAL",
  EXPERIENCEMODAL: "EXPERIENCEMODAL",
  SERVICEMODAL: "SERVICEMODAL",
  PORTFOLIOMODAL: "PORTFOLIOMODAL",
  BLOGMODAL: "BLOGMODAL",
  TESTIMONIALiTEMS: "TESTIMONIALiTEMS",
  ABOUTDATA: "ABOUTDATA",
};
const {
  MODAL,
  SERVICEMODAL,
  PORTFOLIOMODAL,
  BLOGMODAL,
  TESTIMONIALiTEMS,
  ABOUTDATA,
} = type;

import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Citofonia from "@/components/Citofonia";
import Incendios from "@/components/Incendios";
import Red from "@/components/Red";
import Resume from "@/components/Resume";
import Service from "@/components/Service";
import { createContext, useCallback, useReducer } from "react";

import dynamic from "next/dynamic";
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});

const context = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case MODAL:
      return {
        ...state,
        modal: payload,
      };
    case SERVICEMODAL:
      return {
        ...state,
        serviceModal: payload,
      };
    case PORTFOLIOMODAL:
      return {
        ...state,
        portfolioModal: payload,
      };
    case BLOGMODAL:
      return {
        ...state,
        blogModal: payload,
      };
    case TESTIMONIALiTEMS:
      return {
        ...state,
        testimonialItems: payload,
      };
    case ABOUTDATA:
      return {
        ...state,
        aboutData: payload,
      };
    default:
      return state;
  }
};

const state = (props) => {
  const initialState = {
    modal: false,
    serviceModal: null,
    portfolioModal: null,
    blogModal: null,
    testimonialItems: 2,
    pageContent: [
      { id: 1, sectionId: "about", component: <AboutMe /> },
      { id: 2, sectionId: "resume", component: <Resume /> },
      { id: 3, sectionId: "portfolio", component: <Citofonia /> },
      { id: 4, sectionId: "service", component: <Incendios /> },
      { id: 5, sectionId: "testimonials", component: <Red/> },
      { id: 6, sectionId: "news", component: <Blog /> },
      { id: 7, sectionId: "contact", component: <Contact /> },
    ],
    menus: [
      { id: 0, href: "home", title: "Home", icon: "squares" },
      { id: 1, href: "about", title: "Instalación y programación CCTV", icon: "archive" },
      { id: 2, href: "resume", title: "Alarmas", icon: "contacs" },
      { id: 3, href: "portfolio", title: "Citofonía", icon: "briefcase" },
      { id: 4, href: "service", title: "Sistema incendios", icon: "gear" },
      { id: 5, href: "testimonials", title: "Red Interna telemunicaciones", icon: "message" },
      { id: 6, href: "news", title: "Otros servicios", icon: "writing" },
      { id: 7, href: "contact", title: "Contact", icon: "letter" },
    ],
    aboutData: {
      name: "Jessica Parker",
      img: "/img/about/1.jpg",
      birthday: "April 22, 1990",
      nationality: "Bangladeshi",
      email: "hello@anderson.com",
      phone: "+123 456 7890",
      bio: "Es el conjunto de equipos y dispositivos electrónicos interconectados entre si a través de una central alarmas cuya aplicación están relacionadas con la protección de personas y bienes.",
      address: "20, Bardeshi, Dhaka",
      title: "INSTALACIÓN Y PROGRAMACIÓN de CCTV:",
      subTitle:
        "A passionate UI/UX Designer and Web Developer based In NYC, USA",
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const modalToggle = useCallback((value) => {
    dispatch({
      type: MODAL,
      payload: value,
    });
  }, []);

  const setServiceModal = useCallback((value) => {
    dispatch({
      type: SERVICEMODAL,
      payload: value,
    });
  }, []);
  const setPortfolioModal = useCallback((value) => {
    dispatch({
      type: PORTFOLIOMODAL,
      payload: value,
    });
  }, []);
  const setBlogModal = useCallback((value) => {
    dispatch({
      type: BLOGMODAL,
      payload: value,
    });
  }, []);

  const setTestimonialItems = useCallback((value) => {
    dispatch({
      type: TESTIMONIALiTEMS,
      payload: value,
    });
  }, []);

  const setAboutData = useCallback((value) => {
    let aboutData = {
      name: value && value.name ? value.name : state.aboutData.name,
      img: value && value.img ? value.img : state.aboutData.img,
      address: value && value.address ? value.address : state.aboutData.address,
      bio: value && value.bio ? value.bio : state.aboutData.bio,
      birthday:
        value && value.birthday ? value.birthday : state.aboutData.birthday,
      email: value && value.email ? value.email : state.aboutData.email,
      nationality:
        value && value.nationality
          ? value.nationality
          : state.aboutData.nationality,
      phone: value && value.phone ? value.phone : state.aboutData.phone,
      title: value && value.title ? value.title : state.aboutData.title,
    };
    dispatch({
      type: ABOUTDATA,
      payload: value ? aboutData : state.aboutData,
    });
  }, []);

  const {
    modal,
    serviceModal,
    portfolioModal,
    blogModal,
    pageContent,
    testimonialItems,
    menus,
    aboutData,
  } = state;
  return (
    <context.Provider
      value={{
        modal,
        modalToggle,
        serviceModal,
        setServiceModal,
        portfolioModal,
        setPortfolioModal,
        blogModal,
        setBlogModal,
        pageContent,
        setTestimonialItems,
        testimonialItems,
        menus,
        setAboutData,
        aboutData,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default state;

export { context };
