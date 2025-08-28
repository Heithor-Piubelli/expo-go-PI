import { Produtos } from '../types/produtos';

const produtosApi= [
    {
      id: '1',
      plano: 'Básico',
      descricao: 'Acesso a funcionalidades básicas',
      quantidade: 1,
      preco: 9.99,
      categoria: 'web',
    },
    {
      id: '2',
      plano: 'Premium',
      descricao: 'Acesso a todas as funcionalidades',
      quantidade: 1,
      preco: 19.99,
      categoria: 'web',
    },
    {
      id: '3',
      plano: 'Básico VPS',
      descricao: 'Acesso a funcionalidades avançadas e suporte prioritário',
      quantidade: 1,
      preco: 29.99,
      categoria: 'vps',
    },
  ];

export default produtosApi;
