import styles from './Produtos.module.css'; // 1. Corrigido o erro de digitação "mport"
import { FaPix } from 'react-icons/fa6';

import camisa1-fa from '../../img/camisa1-fa.png';
import camisa1-kid from '../../img/camisa1-kid.png';
import camisa1-torcedor from '../../img/camisa1-torcedor.png';
import camisa1-torcedora from '../../img/camisa1-torcedora.png';
import camisa1-jogador from '../../img/camisa1-jogador.png';

import camisa2-fa from '../../img/camisa2-fa.jpg';
import camisa2-kid from '../../img/camisa2-kid.png';
import camisa2-torcedor from '../../img/camisa2-torcedor.png';
import camisa2-torcedora from '../../img/camisa2-torcedora.png';
import camisa2-jogador from '../../img/camisa2-jogador.webp';

import camisa3-kid from '../../img/camisa3-jogador.png';
import camisa3-torcedor from '../../img/camisa3-torcedor.png';
import camisa3-torcedora from '../../img/camisa3-torcedora.png';
import camisa3-jogador from '../../img/camisa3-jogador.png';

import camisa-goleiro from '../../img/camisa-goleiro.webp';
import camisa-prejogo from '../../img/camisa-prejogo.png';


function Produtos() {
    // 2. Adicionada a propriedade "imagem" associando as importações aos produtos corretos
    const listaProdutos = [
        {
            id: 1,
            nome: 'Camisa Corinthians Nike I 2026/27 Fã Masculina',
            preco: 'R$ 189,99',
            desc: 'Mostre seu amor pelo S.C. Corinthians com esta camisa Fã antissuor.',
            detalhes: 'Camisa Corinthians Nike I 2026/27 Fã Masculina, feita com tecido antissuor para manter você seco e confortável durante os jogos. Ideal para torcedores apaixonados que querem mostrar seu apoio ao time.',
            imagem: camisa1-fa,
        },
        {
            id: 2,
            nome: 'Camisa Corinthians Nike I 2026/27 Torcedor Pro Criança',
            preco: 'R$ 284,99',
            desc: 'Camisa Corinthians Nike I 2026/27 Torcedor Pro Criança',
            detalhes: 'Nossa coleção Torcedor Pro combina designs inspirados na camisas dos times com uma tecnologia antissuor, garantindo o look perfeito para você torcer para o seu time do coração.',
            imagem: camisa1-kid,
        },
        {
            id: 3,
            nome: 'Camisa Corinthians Nike I 2026/27 Torcedor Pro Masculina',
            preco: 'R$ 379,99',
            desc: 'Em 1976, mais de 70 mil torcedores do Corinthians tomaram conta do Rio de Janeiro no que ficou conhecido como Invasão Corinthiana. Para celebrar os 50 anos desse dia, esta camisa faz uma homenagem a festa da torcida naquele jogo.',
            detalhes: 'Nossa coleção Torcedor Pro combina designs inspirados na camisas dos times com uma tecnologia antissuor, garantindo o look perfeito para você torcer para o seu time do coração.',
            imagem: camisa1-torcedor,
        },
        {
            id: 4,
            nome: 'Headset Gamer',
            preco: 'R$ 1080,00',
            desc: 'Headset Gamer Quantum 910 Wireless Preto Jbl Preto.',
            imagem: imgFone,
        },
        {
            id: 5,
            nome: 'Notebook',
            preco: 'R$ 4.599,00',
            desc: 'Dell Alienware Aurora 16 Core 7 16gb 1tb Rtx 5050.',
            imagem: imgNotebook,
        },
        {
            id: 6,
            nome: 'Placa de Vídeo',
            preco: 'R$ 7.759,00',
            desc: 'Placa De Vídeo Msi Geforce Rtx 5070 Ti Shadow 3x Oc 16gb',
            imagem: imgPlacaDeVideo,
        },
        {
            id: 7,
            nome: 'Processador',
            preco: 'R$ 1.399,00',
            desc: 'PROCESSADOR AMD RYZEN 7 5700X 3.4GHz (TURBO 4.6GHz)',
            imagem: imgProcessador,
        },
        {
            id: 8,
            nome: 'Water Cooler',
            preco: 'R$ 309,99',
            desc: 'Water Cooler Rise Mode Aura Ice Black, ARGB, 360mm, AMD/Intel',
            imagem: imgCooler,
        },
    ];

    return (
        <section className={styles.container}>
            <h1 className={styles.titulo}>Nossos Produtos</h1>

            <div className={styles.lista}>
                {listaProdutos.map((p) => (
                    <div key={p.id} className={styles.produtoCard}>
                        {/* 4. A tag de imagem é adicionada aqui, chamando p.imagem */}
                        <img
                            src={p.imagem}
                            alt={`Foto de ${p.nome}`}
                            className={
                                styles.imagemProduto
                            } /* Você pode criar essa classe no seu CSS para ajustar o tamanho */
                        />
                        <h3>{p.nome}</h3>
                        <p>{p.desc}</p>
                     <h4>  <FaPix /> {p.preco}</h4>
                        <button className={styles.button}>Comprar</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Produtos;
