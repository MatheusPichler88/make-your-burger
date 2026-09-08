import { createRouter, createWebHistory } from 'vue-router' // biblioteca de rotas do vue
import HomeView from '../views/Home.vue' // importa a pagina inicial do projeto

const routes = [  //Lista de rotas do projeto
  {
    path: '/', //ponto de entrada do projeto
    name: 'home',
    component: HomeView //Carregamento imediato da pagina inicial do projeto
  },
  {
    path: '/pedidos', //rota para a pagina de pedidos
    name: 'Pedidos', // Apelido da rota (se precisar mudar a url da rota, altera o texto no path e o projeto continua funcionando onde estiver chamando esse name)

    component: () => import('../views/Pedidos.vue') //Carregamento tardio da pagina de pedidos do projeto
  }
]

const router = createRouter({ // Instancia o controller de rotas do projeto, passando para ele o historico de rotas e a lista de rotas do projeto
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router //Exporta o controller de rotas do projeto para ser usado em outros arquivos do projeto 
