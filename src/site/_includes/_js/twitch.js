// class TwitchPromo extends HTMLElement {
//   constructor() {
//     super();
//
//     this.attachShadow({ mode: "open" });
//     this.username = this.getAttribute("username");
//     this.clientId = this.getAttribute("clientId");
//   }
//
//   async connectedCallback() {
//     this.TWITCH_DATA = await this.getTwitchContent();
//     if (this.TWITCH_DATA) this.render();
//   }
//
//   async getTwitchContent() {
//     const url = `https://api.twitch.tv/helix/streams?user_login=${this.username}`;
//     const request = new Request(url, {
//       method: "GET",
//       headers: { "Client-ID": this.clientId }
//     });
//     const response = await fetch(request);
//     const json = await response.json();
//     if (json.data) return json.data[0];
//   }
//
//   styleComponent() {
//     let styleString = `
//             * {
//               margin: 0;
//               padding: 0;
//               box-sizing: border-box;
//             }
//             .twitch-promo-container {
//               position: fixed;
//               bottom: .5rem;
//               right: .5rem;
//               width: calc(100% - 1rem);
//               max-width: 800px;
//               left: 50%;
//               transform: translateX(-50%);
//             }
//             .twitch-promo {
//               display: flex;
//               flex-direction: row;
//               align-items: center;
//               background-color: var(--color-bg, #fff);
//               padding: 1rem;
//               font-size: .85rem;
//               line-height: 1.3em;
//               border: 3px solid var(--color-border, #000);
//               color: var(--color-text, #000);
//               text-decoration: none;
//               transition: background-color .3s ease-out, box-shadow .3s ease-out;
//             }
//             .twitch-promo:hover {
//               background-color: var(--color-bg-hover, #e0cdfb);
//             }
//             .twitch-promo > * + * {
//               margin-top: .85rem;
//             }
//             .twitch-promo-headline {
//               font-size: 1.25rem;
//               font-weight: 700;
//               padding-right: 1rem;
//             }
//             .twitch-promo-icon {
//             }
//             .twitch-promo-title {
//               text-align: left;
//               padding-right: 1rem;
//             }
//             .twitch-promo-close-button {
//               position: absolute;
//               top: .5rem;
//               right: .5rem;
//               border: 0;
//               width: 1.3rem;
//               height: 1.3rem;
//               font-size: 1.1rem;
//               background: none;
//               line-height: 1em;
//               font-weight: bold;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//             }
//             .twitch-promo > * {
//               margin: 0;
//             }
//             html.mode-dark .twitch-promo {
//               border: 3px solid var(--dark-color-border, #fff);
//               color: var(--dark-color-text, #fff);
//               background-color: var(--dark-color-bg, #000);
//             }
//             html.mode-dark .twitch-promo:hover {
//               color: var(--dark-color-text, #fff);
//               background-color: var(--dark-color-bg-hover, #e0cdfb);
//             }
//             html.mode-dark .twitch-promo-close-button {
//               color: var(--dark-color-close, #fff);
//             }
//         `;
//     return styleString;
//   }
//
//   async render() {
//     const data = this.TWITCH_DATA;
//     if (data) {
//       this.shadowRoot.innerHTML = `
//               <style>
//                   ${this.styleComponent()}
//               </style>
//               <div class="twitch-promo-container">
//                   <button class="twitch-promo-close-button">x</button>
//                   <a href="https://twitch.com/${
//                     data.user_name
//                   }" class="twitch-promo">
//                       <p class="twitch-promo-headline">
//                         <svg class="twitch-promo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" fill="currentColor">
//                         <path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"/>
//                         </svg>
//                       </p>
//                       <p class="twitch-promo-title"><strong>LIVE: </strong>${
//                         data.title
//                       }</p>
//                   </a>
//               </div>
//             `;
//       this.afterRender();
//     }
//   }
//   afterRender() {
//     this.closeButton = this.shadowRoot.querySelector(
//       ".twitch-promo-close-button"
//     );
//     let element = this;
//     this.closeButton.addEventListener("click", function(evt) {
//       evt.preventDefault();
//       element.remove();
//     });
//   }
// }
//
// if ("customElements" in window) {
//   customElements.define("twitch-promo", TwitchPromo);
// }
