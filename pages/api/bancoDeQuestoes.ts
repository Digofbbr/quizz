import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] =[
    new QuestaoModel(200, 'Qual bicho transmite a doença de chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(201, 'Qual Pokemon é o número 4 na Pokedex?', [
        RespostaModel.errada('Pikachu'),
        RespostaModel.errada('Onix'),
        RespostaModel.errada('Ditto'),
        RespostaModel.certa('Charmander'),
    ]),
    new QuestaoModel(202, 'Qual o coletivo de cães?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(203, 'Qual a capital da Bulgária?', [
        RespostaModel.errada('Sarajevo'),
        RespostaModel.errada('Viena'),
        RespostaModel.errada('Bratislava'),
        RespostaModel.certa('Sofia'),
    ]),
    new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno'),
    ]),
    new QuestaoModel(205, 'Quem compôs o Hino da Independência?', [
        RespostaModel.errada('Castro Alves'),
        RespostaModel.errada('Manuel Bandeira'),
        RespostaModel.errada('Carlos Gomes'),
        RespostaModel.certa('Dom Pedro I'),
    ]),
    new QuestaoModel(206, 'Qual é o antônimo de "malograr"?', [
        RespostaModel.errada('Perder'),
        RespostaModel.errada('Fracassar'),
        RespostaModel.errada('Desprezar'),
        RespostaModel.certa('Conseguir'),
    ]),
    new QuestaoModel(207, 'Em que país nasceu Carmen Miranda?', [
        RespostaModel.errada('Argentina'),
        RespostaModel.errada('Espanha'),
        RespostaModel.errada('Brasil'),
        RespostaModel.certa('Portugal'),
    ]),
    new QuestaoModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        RespostaModel.errada('Costa e Silva'),
        RespostaModel.errada('Emílio Médici'),
        RespostaModel.errada('Ernesto Geisel'),
        RespostaModel.certa('João Figueiredo'),
    ]),
    new QuestaoModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        RespostaModel.errada('Ás'),
        RespostaModel.errada('Nove'),
        RespostaModel.errada('Rei'),
        RespostaModel.certa('Valete'),
    ]),
    new QuestaoModel(210, 'O adjetivo "venoso" está relacionado a:', [
        RespostaModel.errada('Vela'),
        RespostaModel.errada('Vento'),
        RespostaModel.errada('Vênia'),
        RespostaModel.certa('Veia'),
    ]),
    new QuestaoModel(211, 'Que nome se dá à purificação por meio da água?', [
        RespostaModel.errada('Abrupção'),
        RespostaModel.errada('Abolição'),
        RespostaModel.errada('Abnegação'),
        RespostaModel.certa('Ablução'),
    ]),
    new QuestaoModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        RespostaModel.errada('Monte Branco'),
        RespostaModel.errada('Monte Fuji'),
        RespostaModel.errada('Monte Carlo'),
        RespostaModel.certa('Monte Everest'),
    ]),
    new QuestaoModel(213, 'Em que parte do corpo se encontra a epiglote?', [
        RespostaModel.errada('Estômago'),
        RespostaModel.errada('Pâncreas'),
        RespostaModel.errada('Rim'),
        RespostaModel.certa('Pescoço'),
    ]),
    new QuestaoModel(214, 'A compensação por perda é chamada de...', [
        RespostaModel.errada('Déficit'),
        RespostaModel.errada('Indexação'),
        RespostaModel.errada('Indébito'),
        RespostaModel.certa('Indenização'),
    ]),
    new QuestaoModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        RespostaModel.errada('Cuca'),
        RespostaModel.errada('Curupira'),
        RespostaModel.errada('Boitatá'),
        RespostaModel.certa('Saci-pererê'),
    ]),
    new QuestaoModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        RespostaModel.errada('Marechal Deodoro'),
        RespostaModel.errada('Barão de Mauá'),
        RespostaModel.errada('Marquês de Pombal'),
        RespostaModel.certa('Duque de Caxias'),
    ]),
    new QuestaoModel(217, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),
    ]),

]

export default questoes