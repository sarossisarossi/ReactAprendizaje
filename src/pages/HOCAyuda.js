// es un High Order Component HOC
// function takes component and return new component , transformr props into ui 
// agrega propiedades al component 

import { useEffect } from "react";

 //withSubsription es el HOC que toma el componente WrappedComponent y lo mejora}t
 // tomando selectData como funcion para determinar el tipo de data  que esto obteniendo
 //de la fuente de datos
 // en este caso podrian ser ordenes o usuarios , dependiendo lo que quiera,.,, ojo que son 
 // objetos, retorna data, como la salida de datos que nos interesa y trasapasa todos los props tb


// const withSubsription = (WrappedComponent, selectData) => {
//     return(props) =Z {
//         const [data,setData] =useState([]);

//         useEffect(()  => {
//             const handleChange = () => {
//                 const newData = selectData(Datasource , props);
//                 setData(NewData)
//             }
//             Datasource.addListener(handleChange)

//             return () =>{
//                 Datasource.removeListener(handleChange)
//             },
//         }

//         ,[]);
//         return <WrappedComponent data = {data} {...props}>
//     }} eso es lo que hace.-

HOC USAGE 
// defines dos copmonenntes con custom parameters, uno con liveorders y uno con subscriptores
//para no doble implementar
//  se usa  asi
// const LiveOrdersListWithSubscription = withSubscription(LiveOrders, () =>DataSource.getOrders());
 //const UsersSubscribedWithSubscription = withSubscription(UserList, () =>DataSource.getSubscribers());


 //esto reemplaza a la live orders list q es basicmente lo mismo que la lista de subscribers

 //function LiveOrdersList() {
//         const [orders,setOrders] =useState([]);

//         useEffect(()  => {
//             const handleNewOrdesrs = () => {
//                 const newOrders =Datasource.getORders();
//                 setOrders(newOrders)
//             }
//             Datasource.addListener(handleNewOrdesrs)

//             return () =>{
//                 Datasource.removeListener(handleNewOrdesrs)
//             },
//         }

//         ,[]);
//         return <LiveOrders orders = {orders} />
//     }} eso es lo que hace.-

// Sergio
// como que algo entiendo , es recomendado usar Hocs y mantener los componentes stateless?

// Coach
// ¡Exactamente! Utilizar Higher-Order Components (HOCs) y mantener los componentes stateless es una práctica recomendada en React, especialmente cuando se trata de manejar lógica de suscripción y otros comportamientos comunes. Vamos a desglosar por qué esto es beneficioso.

// Ventajas de Usar HOCs y Componentes Stateless

// Separación de Responsabilidades:

// Al usar HOCs, puedes separar la lógica de suscripción y gestión de estado de la lógica de presentación. Esto significa que tu componente stateless se enfoca únicamente en cómo se ve y se comporta, sin preocuparse por cómo obtener o actualizar los datos.
// Esta separación hace que tu código sea más limpio y más fácil de mantener.
// Reutilización de Código:

// Los HOCs permiten encapsular la lógica común que puede ser reutilizada en múltiples componentes. Por ejemplo, si tienes varios componentes que necesitan recibir datos en tiempo real, puedes crear un HOC que maneje la suscripción y luego aplicarlo a cada componente que lo necesite.
// Esto reduce la duplicación de código y hace que tu aplicación sea más eficiente.
// Facilidad de Pruebas:

// Los componentes stateless son más fáciles de probar porque no tienen estado interno. Puedes simplemente pasarles props y verificar que se comporten como se espera.
// Al tener la lógica de suscripción en un HOC, puedes probar el HOC por separado, asegurándote de que maneje correctamente la suscripción y la limpieza.
// Mejor Rendimiento:
// Al mantener los componentes stateless, puedes optimizar el rendimiento de tu aplicación. React puede hacer un mejor trabajo al determinar cuándo necesita volver a renderizar un componente, ya que no tiene que preocuparse por el estado interno que podría cambiar.
// Ejemplo de Uso de HOC

// Imagina que tienes un HOC que maneja la suscripción a una lista de pedidos:

// const withSubscription = (WrappedComponent, selectData) => {
//   return class extends React.Component {
//     state = { data: [] };

//     componentDidMount() {
//       this.subscription = subscribeToData(selectData, (newData) => {
//         this.setState({ data: newData });
//       });
//     }

//     componentWillUnmount() {
//       this.subscription.unsubscribe(); // Limpieza
//     }

//     render() {
//       return <WrappedComponent {...this.props} data={this.state.data} />;
//     }
//   };
// };
// Luego, puedes usar este HOC para crear un componente stateless:

// const OrderList = ({ data }) => (
//   <ul>
//     {data.map(order => (
//       <li key={order.id}>{order.name}</li>
//     ))}
//   </ul>
// );

// const EnhancedOrderList = withSubscription(OrderList, selectOrderData);
// Resumen

// Usar HOCs: Te permite encapsular la lógica de suscripción y reutilizarla en diferentes componentes.
// Mantener Componentes Stateless: Hace que tu código sea más limpio, fácil de probar y optimizado para el rendimiento.
// Si tienes más preguntas sobre HOCs, componentes stateless, o cualquier otro tema, ¡no dudes en preguntar! Estoy aquí para ayudarte a entender mejor.


// USO HOC

// Ejemplo 1: HOC para Manejar la Autenticación

// Supongamos que tienes varios componentes que deben estar protegidos y solo deben ser accesibles para usuarios autenticados. Puedes crear un HOC que verifique si el usuario está autenticado antes de renderizar el componente.

// const withAuth = (WrappedComponent) => {
//   return (props) => {
//     const isAuthenticated = // lógica para verificar autenticación
//     if (!isAuthenticated) {
//       return <Redirect to="/login" />;
//     }
//     return <WrappedComponent {...props} />;
//   };
// };

// // Uso del HOC
// const ProtectedComponent = withAuth(MyComponent);
// Ejemplo 2: HOC para Manejar el Estado del Mouse

// Imagina que quieres que varios componentes muestren la posición del mouse. Puedes crear un HOC que inyecte la posición del mouse como una prop.

// const withMousePosition = (WrappedComponent) => {
//   return class extends React.Component {
//     state = { mousePosition: { x: 0, y: 0 } };

//     handleMouseMove = (event) => {
//       this.setState({ mousePosition: { x: event.clientX, y: event.clientY } });
//     };

//     componentDidMount() {
//       window.addEventListener('mousemove', this.handleMouseMove);
//     }

//     componentWillUnmount() {
//       window.removeEventListener('mousemove', this.handleMouseMove);
//     }

//     render() {
//       return <WrappedComponent mousePosition={this.state.mousePosition} {...this.props} />;
//     }
//   };
// };

// // Uso del HOC
// const MousePositionComponent = withMousePosition(MyComponent);
// Resumen

// HOC de Autenticación: Protege componentes asegurando que solo los usuarios autenticados puedan acceder a ellos.
// HOC de Posición del Mouse: Inyecta la posición del mouse en varios componentes sin duplicar código.

//ejemplo completo

//HOC que verifique si el usuario está autenticado. Si no lo está, redirigirá al usuario a la página de inicio de sesión.
// // withAuth.js
// import React from 'react';
// import { Redirect } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado

// const withAuth = (WrappedComponent) => {
//   return (props) => {
//     const isAuthenticated = // lógica para verificar autenticación, por ejemplo:
//       localStorage.getItem('token') !== null; // Suponiendo que guardas un token en localStorage

//     if (!isAuthenticated) {
//       return <Redirect to="/login" />;
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;

// creo la page, ya tengo varias creadas
// //// Page.js
// import React from 'react';

// const Page = () => {
//   return (
//     <div>
//       <h1>Bienvenido a la Página Protegida</h1>
//       <p>Solo los usuarios autenticados pueden ver esto.</p>
//     </div>
//   );
// };
// export default Page;

//usar hoc como el componente
//Finalmente, envuelve tu componente Page con el HOC withAuth para protegerlo.
// App.js o donde estés definiendo tus rutas
// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Page from './Page';
// import withAuth from './withAuth';

// const AuthenticatedPage = withAuth(Page);

// const App = () => {
//   return (
//     <Router>
//       <Route path="/page" component={AuthenticatedPage} />
//       <Route path="/login" component={LoginPage} /> {/* Asegúrate de tener una página de inicio de sesión */}
//     </Router>
//   );
// };

// export default App;

// Resumen

// Crea un HOC (withAuth) que verifica la autenticación del usuario.
// Crea tu componente Page que deseas proteger.
// Envuelve el componente Page con el HOC withAuth al definir tus rutas.


// como seria una logica correcta