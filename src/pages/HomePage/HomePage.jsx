import React from 'react'
import { Link } from "react-router-dom";
import './HomeStyle.css'
import video from '../../assets/mp4/Hotel.mp4';


export const HomePage = () => {
  return (
    <>
<div class="bg-video-wrap">
        <video
          className="bg-video"
          playsInline="playsinline"
          autoPlay="autolay"
          muted="muted"
          loop="loop"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

     <header class = "bg-header-image bg-cover bg-center bg-no-repeat min-h-screen flex flex-col overflow-hidden">
            <div class = "header-top bg-eerie-black min-h-[48px] flex items-center font-barlow py-3">
                <div class="container max-w-[1200px] mx-auto lg:flex lg:justify-between">
                    <div class = "header-top-left flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start">
                        <div class = "flex py-1">
                            <img src = "" class = "w-[10px] mx-2" alt = ""/>
                            <span class = "text-platinum opacity-60 font-light text-sm">Hoteleria Lario</span>
                        </div>
                    </div>     
                    <ul class = "flex items-center justify-center py-1">
                        <li class = "w-3 h-3 md:w-4 md:h-4 flex items-center justify-center mx-2">
                            <a href = "#" class = "hover:opacity-80 transition ease-in-out duration-300">
                                <img src = "" alt = ""/>
                            </a>
                        </li>
                        <li class = "w-3 h-3 md:w-4 md:h-4 flex items-center justify-center mx-2">
                            <a href = "#" class = "hover:opacity-80 transition ease-in-out duration-300">
                                <img src = "" alt = ""/>
                            </a>
                        </li>
                        <li class = "w-3 h-3 md:w-4 md:h-4 flex items-center justify-center mx-2">
                            <a href = "#" class = "hover:opacity-80 transition ease-in-out duration-300">
                                <img src = "" alt = ""/>
                            </a>
                        </li>
                        <Link to='login'>
                        <a button href = "#" class = "bg-lion font-barlow px-9 min-w-[158px] min-h-[48px] inline-flex items-center justify-center uppercase text-white transition duration-100 ease-in-out hover:bg-lion-dark mt-1 tracking-widest">Login</a>
                        </Link>
                    </ul>
                </div>
            </div>
            <div class = "header-main px-3 flex-1 flex">
                <div class="container max-w-[1200px] mx-auto flex flex-col">
                    <nav class = "py-5 md:flex md:justify-between">
                        <div class = "flex justify-between">
                            <a href = "#" class = "font-gilda text-[28px] font-normal text-lion">Bad<span class = "text-white">Request.</span></a>
                            <button type = "button" class = "text-white md:hidden" id = "navbar-show-btn">
                                <i class = 'fas fa-bars'></i>
                            </button>
                        </div>          
                    </nav>
                    <div class="text-align:center flex-1 flex items-center justify-stretch flex-col text-center py-5">
                        <h1 class = "text-2xl xs:text-[32px] text-white font-gilda tracking-[.04em] uppercase font-normal max-w-[800px] ">Las próximas vacaciones nos dan algo que esperar con impaciencia.An upcoming vacation gives us something to eagerly anticipate.</h1>
                        <a href = "#" class = "min-w-[158px] min-h-[48px] bg-transparent uppercase text-white border-2 font-barlow tracking-widest text-base font-normal inline-flex items-center justify-center mt-9 md:mt-[60px] hover:bg-white hover:text-black transition duration-300 ease-in-out">know more</a>
                        <form class="font-barlow mt-16 bg-white w-full grid sm:grid-cols-2 lg:grid-cols-6">  
                        </form>
                    </div>
                </div>
            </div>
        </header>
        <section class = "bg-nero min-h-[640px] mx-auto px-3 flex items-center py-16">
            <div class="container max-w-[1200px] mx-auto grid md:grid-cols-2 gap-14">
                <div class = "flex flex-col justify-center items-start">
                    <h3 class = "text-coyote font-normal opacity-70 tracking-[.25em] font-barlow-cond text-xl sm:text-[22px] uppercase">Bienvenidos a</h3>
                    <h1 class = "font-gilda text-2xl sm:text-[38px] tracking-[.04em] font-normal py-3 text-white mb-3">Centro turístico </h1>
                    <p class = "opacity-60 font-light font-barlow text-justify text-base sm:text-lg text-white">BadRequest se encuentra en fuera de la cuidad capital. En los últimos años, BadRequest Swiss ha ampliado su infraestructura, ha creado oportunidades atractivas para los inversores y ha creado nuevos puestos de trabajo para toda la región.</p>
                </div>
                <div class = "welcome-slider overflow-hidden">
                    <div class = "h-[425px]">
                        <img class = "w-full h-full object-cover" src = "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/900/360/75/dam/wdpro-assets/dlr/places-to-stay/disneyland-hotel/resort-overview/disneyland-hotel-06-full.jpg?1682011175188" alt = "welcome image"/>
                    </div>
                    <div class = "h-[425px]">
                        <img class = "w-full h-full object-cover" src = "https://www.nobbot.com/wp-content/uploads/2016/08/hoteles-w-920x515.jpg" alt = "welcome image"/>
                    </div>
                    <div class = "h-[425px]">
                        <img class = "w-full h-full object-cover" src = "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" alt = "welcome image"/>
                    </div>
                </div>
            </div>
        </section>
        <section class = "py-16 px-3 bg-booking-image bg-center bg-cover bg-no-repeat">
            <div class = "container max-w-[1200px] mx-auto">
                <h2 class = "font-gilda font-normal text-3xl sm:text-[46px] tracking-[.04em] text-center text-white mb-3">Formulario de reserva de hotel</h2>
                <div class="flex items-center justify-center">
                    <img src = "" alt = ""/>
                </div>
                <form class = "my-16 max-w-[824px] mx-auto">
                    <div class = "my-3">
                        <input type = "text" class = "outline-none py-4 px-5 bg-transparent caret-white text-white text-lg tracking-[.04em] font-light font-barlow placeholder:text-white border-white border-solid border-b-[1px] w-full" placeholder="Nombre Completo"/>
                    </div>
                    <div class = "grid md:grid-cols-2 md:my-3 md:gap-x-10">
                        <input type = "text" class = "outline-none py-4 px-5 bg-transparent caret-white text-white text-lg tracking-[.04em] font-light font-barlow placeholder:text-white border-white border-solid border-b-[1px] w-full my-3" placeholder="Numero de Telefono"/>
                        <input type = "text" class = "outline-none py-4 px-5 bg-transparent caret-white text-white text-lg tracking-[.04em] font-light font-barlow placeholder:text-white border-white border-solid border-b-[1px] w-full my-3" placeholder="Email Address (optional)"/>
                    </div>
                    <div class = "grid md:grid-cols-2 md:my-3 md:gap-x-10">
                        <input type = "text" class = "outline-none py-4 px-5 bg-transparent caret-white text-white text-lg tracking-[.04em] font-light font-barlow placeholder:text-white border-white border-solid border-b-[1px] w-full my-3" placeholder="Propósito de la reserva"/>
                        <select class = "outline-none py-4 px-5 bg-transparent text-white text-lg tracking-[.04em] font-light font-barlow border-white border-solid border-b-[1px] w-full my-3">
                            <option selected disabled>No. de Adulto</option>
                            <option class = "bg-black/30" value="1">1</option>
                            <option class = "bg-black/30" value="2">2</option>
                            <option class = "bg-black/30" value="3">3</option>
                        </select>
                        <select class = "outline-none py-4 px-5 bg-transparent text-white text-lg tracking-[.04em] font-light font-barlow border-white border-solid border-b-[1px] w-full my-3">
                            <option selected disabled>No. de Niños</option>
                            <option class = "bg-black/30" value="1">1</option>
                            <option class = "bg-black/30" value="2">2</option>
                            <option class = "bg-black/30" value="3">3</option>
                        </select>
                    </div>
                    <div class = "grid md:grid-cols-2 md:my-3 md:gap-x-10">
                        <input type = "date" class = "outline-none py-4 px-5 bg-transparent caret-white text-white text-lg tracking-[.04em] font-light font-barlow placeholder:text-white border-white border-solid border-b-[1px] w-full my-3"/>
                      
                        <input type = "time" class = "outline-none py-4 px-5 bg-transparent caret-white text-white text-lg tracking-[.04em] font-light font-barlow placeholder:text-white border-white border-solid border-b-[1px] w-full my-3"/>
                    </div>
                    <div class="flex items-center justify-center">
                        <a href = "#" class = "bg-white font-barlow px-4 min-w-[158px] min-h-[48px] inline-flex items-center justify-center uppercase text-eerie-black transition duration-300 ease-in-out hover:bg-eerie-black hover:text-white mt-8 tracking-widest">Explorar ahora</a>
                    </div>
                </form>
            </div>
        </section>
        <section class = "py-16 px-3 bg-white">
            <div class="container max-w-[1200px] mx-auto">
                <h2 class = "font-gilda font-normal text-3xl sm:text-[46px] tracking-[.04em] text-coyote text-center mb-3">Eventos</h2>
                <div class="flex items-center justify-center">
                    <img src = "" alt = ""/>
                </div>
                <div class = 'grid gap-2 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                    <div class = "min-h-[323px] relative">
                        <img src = "https://img.nh-hotels.net/YOqk9/DkGlV/original/NH_Collection_Santa_Fe_Meeting_rooms_celebrations_interior_lounge_area_dance_floor.jpg" class = "w-full h-full object-cover"/>
                        <div class = 'text-white absolute bottom-2 left-2 right-2 bg-black/50 p-5'>
                            <div class = "w-[70px] h-[70px] bg-lion rounded-full flex items-center justify-center flex-col uppercase font-mont text-sm absolute top-0 right-3 -translate-y-[50%]">
                                <span class = "font-bold tracking-widest text-xl inline-block">03</span>
                                <span class = "tracking-widest inline-block -mt-[3px]">apr</span>
                            </div>
                            <h3 class = "font-gilda text-xl tracking-[.04em] uppercase">NOCHE DE BODA</h3>
                            <p class = "font-normal tracking-[.04em] font-barlow text-lg">Realizacion de Boda - <span class = "font-light">07:00 PM</span></p>
                        </div>
                    </div>
                    <div class = "min-h-[323px] relative">
                        <img src = "https://img.travesiasdigital.com/2020/03/opera.jpg" class = "w-full h-full object-cover"/>
                        <div class = 'text-white absolute bottom-2 left-2 right-2 bg-black/50 p-5'>
                            <div class = "w-[70px] h-[70px] bg-lion rounded-full flex items-center justify-center flex-col uppercase font-mont text-sm absolute top-0 right-3 -translate-y-[50%]">
                                <span class = "font-bold tracking-widest text-xl inline-block">06</span>
                                <span class = "tracking-widest inline-block -mt-[3px]">may</span>
                            </div>
                            <h3 class = "font-gilda text-xl tracking-[.04em] uppercase">CONCIERTO DE OPERA</h3>
                            <p class = "font-normal tracking-[.04em] font-barlow text-lg">Invitados especiales - <span class = "font-light">09:00 PM</span></p>
                        </div>
                    </div>
                    <div class = "min-h-[323px] relative">
                        <img src = "https://humanidades.com/wp-content/uploads/2018/09/obra-de-teatro-5-e1578944452922.jpg" class = "w-full h-full object-cover"/>
                        <div class = 'text-white absolute bottom-2 left-2 right-2 bg-black/50 p-5'>
                            <div class = "w-[70px] h-[70px] bg-lion rounded-full flex items-center justify-center flex-col uppercase font-mont text-sm absolute top-0 right-3 -translate-y-[50%]">
                                <span class = "font-bold tracking-widest text-xl inline-block">10</span>
                                <span class = "tracking-widest inline-block -mt-[3px]">jun</span>
                            </div>
                            <h3 class = "font-gilda text-xl tracking-[.04em] uppercase">OBRAS DE TEATRO</h3>
                            <p class = "font-normal tracking-[.04em] font-barlow text-lg">Noche de Teatro - <span class = "font-light">06:00 PM</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class = "py-16 px-3 bg-light-gray">
            <div class = "container max-w-[1200px] mx-auto">
                <h2 class = "font-gilda font-normal text-3xl text-[46px] tracking-[.04em] text-coyote text-center mb-3">Galeria</h2>
                <div class="flex items-center justify-center">
                    <img src = "../assets/images/decorated-pattern-2.svg" alt = ""/>
                </div>
                <div class = "grid gap-3 sm:grid-cols-2 md:grid-cols-3 mt-10">
                    <div class = "group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
                        <img src = "https://images.squarespace-cdn.com/content/v1/55bebb51e4b036c52ebe8c45/1516864626545-7UN87I0TZ0FYHQI5TMMK/contemporary+luxurious+bedroom?format=500w" class = "w-full h-full object-cover" alt = ""/>
                    </div>
                    <div class = "group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
                        <img src = "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/20152251/Dorado-Beach-a-Ritz-Carlton-Reserve-3.jpg" class = "w-full h-full object-cover" alt = ""/>
                    </div>
                    <div class = "group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
                        <img src = "https://www.estelarparquedela93.com/cache/ce/83/ce83be0db7848a4b7649381901b58891.jpg" class = "w-full h-full object-cover" alt = ""/>
                    </div>
                    <div class = "group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
                        <img src = "https://static.hosteltur.com/app/public/uploads/img/releases/2021/03/22/L_102906_consejos-reforma-bano-hotel.jpg" class = "w-full h-full object-cover" alt = ""/>
                    </div>
                    <div class = "group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
                        <img src = "https://img.freepik.com/fotos-premium/apartamentos-lujo-hotel-sala-comedor-sofa-cama-mueble-tv-mesa-comedor-interior-clasico-paredes-blancas-representacion-3d_295714-3937.jpg?w=2000" class = "w-full h-full object-cover" alt = ""/> 
                    </div>
                    <div class = "group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
                        <img src = "https://images.hola.com/imagenes/viajes/20230413229962/que-hace-un-concierge-en-un-hotel-lujo/1-234-243/fourseasonsmadridreception-m.jpg?tx=w_680" class = "w-full h-full object-cover" alt = ""/>  
                    </div>
                </div>
            </div>
        </section>
        <section class = "py-16 px-3 bg-banner-image bg-center bg-cover bg-fixed bg-no-repeat">
            <div class = "container max-w-[1200px] mx-auto">
                <h2 class = "font-gilda font-normal text-3xl sm:text-[46px] tracking-[.04em] text-coyote text-center mb-3">Nuestros Servicios Hoteleros</h2>
                <div class="flex items-center justify-center">
                    <img src = "" alt = ""/>
                </div>
                <div class = "grid gap-3 mt-10 sm:grid-cols-2 md:grid-cols-3">
                    <div class = "flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
                        <img src = "https://spinningcentergym.com/wp-content/uploads/2021/06/Icono-Plan-Entrenamiento.png" class = "w-[54px]"/>
                        <h4 class = "mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">Gimnasio</h4>
                        <p class = "text-white text-base font-barlow font-light tracking-[.04em]">Servicio de GYM las 24h.</p>
                    </div>
                    <div class = "flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
                        <img src = "https://www.melton.gov.uk/media/yy0e3jnq/icon-parking-info.png" class = "w-[54px]"/>
                        <h4 class = "mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">Parqueo</h4>
                        <p class = "text-white text-base font-barlow font-light tracking-[.04em]">Contamos con un ampleo parqueo.</p>
                    </div>
                    <div class = "flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
                        <img src = "https://www.bosquemagicofuentedelpino.es/wp-content/uploads/logos/icono-24h-b.png" class = "w-[54px]"/>
                        <h4 class = "mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">Servicio las 24h</h4>
                        <p class = "text-white text-base font-barlow font-light tracking-[.04em]">Le etendemos las 24h del dia.</p>
                    </div>
                    <div class = "flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
                        <img src = "https://www.piscinas.cat/sites/default/files/2019-04/icono-piscina-250.png" class = "w-[54px]"/>
                        <h4 class = "mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">Piscina</h4>
                        <p class = "text-white text-base font-barlow font-light tracking-[.04em]">Servicio a la piscina.</p>
                    </div>
                    <div class = "flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
                        <img src = "https://www.vippng.com/png/full/497-4975520_coleccin-iconos-redes-wifi-icon-png-white.png" class = "w-[54px]"/>
                        <h4 class = "mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">Internet de fibra</h4>
                        <p class = "text-white text-base font-barlow font-light tracking-[.04em]">Contamos con una alta gama de Internet.</p>
                    </div>
                    <div class = "flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
                        <img src = "https://www.expoguadalajara.mx/images/hotel-icono.png" class = "w-[54px]"/>
                        <h4 class = "mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">Servicio a la Habitacion</h4>
                        <p class = "text-white text-base font-barlow font-light tracking-[.04em]">Servicio las 24h a la habitacion.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class = "py-16 px-3 bg-nero">
            <div class = "container max-w-[1200px] mx-auto">
                <h2 class = "font-gilda font-normal text-3xl sm:text-[46px] tracking-[.04em] text-center text-white mb-3">Blogs y noticias</h2>
                <div class="flex items-center justify-center">
                    <img src = "" alt = ""/>
                </div>
                <div class = "grid mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
                    <a href = "#" class = "transition duration-300 ease-in-out hover:-translate-y-5">
                        <div class = "min-h-[400px]">
                            <img src = "https://endotaspa.com.au/media/catalog/product/p/o/power_series2_1_1.jpg?quality=80&fit=crop&height=1250&width=1000" class = "w-full h-full object-cover" alt = ""/>
                        </div>
                        <div class = "bg-white text-coyote text-center text-lg sm:text-xl font-gilda font-medium tracking-widest uppercase py-6 px-4">Spa</div>
                    </a>
                    <a href = "#" class = "transition duration-300 ease-in-out hover:-translate-y-5">
                        <div class = "min-h-[400px]">
                            <img src = "https://hlondres.com/wp-content/uploads/2021/05/la-brasserie-mari-galant-05.jpg" class = "w-full h-full object-cover" alt = ""/>
                        </div>
                        <div class = "bg-white text-coyote text-center text-lg sm:text-xl font-gilda font-medium tracking-widest uppercase py-6 px-4">Comedores</div>
                    </a>
                    <a href = "#" class = "transition duration-300 ease-in-out hover:-translate-y-5">
                        <div class = "min-h-[400px]">
                            <img src = "https://scenenow.com/Content/editor_api/images/images%20(64)-b0226d60-b22d-4429-b25c-cee9d87f75ab.jpeg" class = "w-full h-full object-cover" alt = ""/>
                        </div>
                        <div class = "bg-white text-coyote text-center text-lg sm:text-xl font-gilda font-medium tracking-widest uppercase py-6 px-4">Relajacion</div>
                    </a>
                </div>
            </div>
        </section> 
        <footer>
            <div class="bg-nero py-16 px-3">
                <div class = "grid max-w-[1200px] mx-auto gap-8 text-center md:grid-cols-2 md:text-start lg:grid-cols-footer">
                    <div class = "md:me-2 lg:me-3">
                        <a href = "index.html" class = "text-lion font-gilda font-normal text-2xl tracking-[.04em]">Bad<span class = "text-white">Request.</span></a>
                        <p class = "text-white font-light font-barlow text-base mt-3 max-w-[480px] mx-auto md:ms-0">Bienvenido al mejor hotel de lujo de cinco estrellas en la ciudad de Guatemala.</p>
                    </div>
                    <div>
                        <h4 class = "inline-block font-gilda tracking-[.04em] text-lg text-white capitalize relative after:absolute after:content-[''] after:left-0 after:-bottom-0 after:h-[1px] after:w-full after:bg-coyote pb-1 mb-4">quick link</h4>
                        <ul>
                            <li class = "my-2">
                                <a href = "#" class = "capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out">our services</a>
                            </li>
                            <li class = "my-2">
                                <a href = "#" class = "capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out">book</a>
                            </li>
                            <li class = "my-2">
                                <a href = "#" class = "capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out">about hotel</a>
                            </li>
                            <li class = "my-2">
                                <a href = "#" class = "capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out">blogs</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 class = "inline-block font-gilda tracking-[.04em] text-lg text-white capitalize relative after:absolute after:content-[''] after:left-0 after:-bottom-0 after:h-[1px] after:w-full after:bg-coyote pb-1 mb-4">explore</h4>
                        <ul>
                            <li class = "my-2">
                                <a href = "#" class = "capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out">rooms & suites</a>
                            </li>
                            <li class = "my-2">
                                <a href = "#" class = "capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out">spa & wellness</a>
                            </li>
                            <li class = "my-2">
                                <a href = "#" class = "capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out">special offers</a>
                            </li>
                            <li class = "my-2">
                                <a href = "#" class = "capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out">restaurant</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 class = "inline-block font-gilda tracking-[.04em] text-lg text-white capitalize relative after:absolute after:content-[''] after:left-0 after:-bottom-0 after:h-[1px] after:w-full after:bg-coyote pb-1 mb-4">contact</h4>
                        <ul>
                            <li class = "my-2 grid grid-cols-[40px_auto] justify-center md:justify-start">
                                <span class = "text-white">
                                    <i class = "fas fa-map-marker-alt"></i>
                                </span>
                                <span class = "text-white/50 font-light">San Pedro la Laguna</span>
                            </li>
                            <li class = "my-2 grid grid-cols-[40px_auto] justify-center md:justify-start ">
                                <span class = "text-white">
                                    <i class = "fas fa-phone"></i>
                                </span>
                                <span class = "text-white/50 font-light">+502 37777745</span>
                            </li>
                            <li class = "my-2 grid grid-cols-[40px_auto] justify-center md:justify-start">
                                <span class = "text-white">         
                                    <i class = "fas fa-envelope"></i>
                                </span>
                                <span class = "text-white/50 font-light">info.hotelbadreq.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

