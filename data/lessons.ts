import { LessonData } from '../types';

export const lessons: LessonData[] = [
  {
    id: 21,
    title: "Numbers & Family",
    vocabulary: [
      {
        title: "Numbers (1-10)",
        items: [
          { en: "one", pt: "um" }, { en: "two", pt: "dois" }, { en: "three", pt: "três" },
          { en: "four", pt: "quatro" }, { en: "five", pt: "cinco" }, { en: "six", pt: "seis" },
          { en: "seven", pt: "sete" }, { en: "eight", pt: "oito" }, { en: "nine", pt: "nove" }, { en: "ten", pt: "dez" }
        ]
      },
      {
        title: "Numbers (11-20)",
        items: [
          { en: "eleven", pt: "onze" }, { en: "twelve", pt: "doze" }, { en: "thirteen", pt: "treze" },
          { en: "fourteen", pt: "quatorze" }, { en: "fifteen", pt: "quinze" }, { en: "sixteen", pt: "dezesseis" },
          { en: "seventeen", pt: "dezessete" }, { en: "eighteen", pt: "dezoito" }, { en: "nineteen", pt: "dezenove" }, { en: "twenty", pt: "vinte" }
        ]
      },
      {
        title: "Numbers (Tens & Hundreds)",
        items: [
          { en: "thirty", pt: "trinta" }, { en: "forty", pt: "quarenta" }, { en: "fifty", pt: "cinquenta" },
          { en: "sixty", pt: "sessenta" }, { en: "seventy", pt: "setenta" }, { en: "eighty", pt: "oitenta" },
          { en: "ninety", pt: "noventa" }, { en: "one hundred", pt: "cem" }
        ]
      },
      {
        title: "Family Members",
        items: [
          { en: "father", pt: "pai" }, { en: "mother", pt: "mãe" },
          { en: "grandfather", pt: "avô" }, { en: "grandmother", pt: "avó" },
          { en: "son", pt: "filho" }, { en: "daughter", pt: "filha" },
          { en: "brother", pt: "irmão" }, { en: "sister", pt: "irmã" },
          { en: "uncle", pt: "tio" }, { en: "aunt", pt: "tia" }, { en: "cousin", pt: "primo/prima" }
        ]
      }
    ],
    phrases: [
      { en: "I helped my mother.", pt: "Eu ajudei minha mãe." },
      { en: "Did you help your father?", pt: "Você ajudou seu pai?" },
      { en: "I didn't visit my grandmother.", pt: "Eu não visitei minha avó." },
      { en: "How many books do you have?", pt: "Quantos livros você tem?" },
      { en: "I have thirty books.", pt: "Eu tenho trinta livros." },
      { en: "How many cousins do you have?", pt: "Quantos primos você tem?" },
      { en: "She has three brothers.", pt: "Ela tem três irmãos." },
      { en: "My uncle lives here.", pt: "Meu tio mora aqui." }
    ],
    exercises: [
      { question: "Eu ajudei minha mãe.", answer: "I helped my mother" },
      { question: "Você ajudou seu pai?", answer: "Did you help your father" },
      { question: "Eu tenho trinta livros.", answer: "I have thirty books" },
      { question: "Quantos primos você tem?", answer: "How many cousins do you have" },
      { question: "Ela tem três irmãos.", answer: "She has three brothers" }
    ]
  },
  {
    id: 22,
    title: "Telling the Time",
    vocabulary: [
      {
        title: "Time Vocabulary",
        items: [
          { en: "clock", pt: "relógio (parede/mesa)" }, { en: "time", pt: "tempo/hora" },
          { en: "hour", pt: "hora (duração)" }, { en: "minute", pt: "minuto" },
          { en: "o'clock", pt: "em ponto" }, { en: "morning", pt: "manhã" },
          { en: "afternoon", pt: "tarde" }, { en: "evening", pt: "noite (chegada)" },
          { en: "night", pt: "noite (saída/dormir)" }
        ]
      },
      {
        title: "Specific Times",
        items: [
          { en: "seven fifteen", pt: "sete e quinze (7:15)" },
          { en: "eight thirty", pt: "oito e trinta (8:30)" },
          { en: "half past eight", pt: "oito e meia (8:30)" },
          { en: "nine forty-five", pt: "nove e quarenta e cinco (9:45)" },
          { en: "a quarter to ten", pt: "quinze para as dez (9:45)" },
          { en: "ten o'clock", pt: "dez em ponto (10:00)" },
          { en: "six twenty", pt: "seis e vinte (6:20)" },
          { en: "eleven fifty", pt: "onze e cinquenta (11:50)" }
        ]
      }
    ],
    phrases: [
      { en: "What time is it?", pt: "Que horas são?" },
      { en: "It's seven fifteen.", pt: "São sete e quinze." },
      { en: "It's half past eight.", pt: "São oito e meia." },
      { en: "It's a quarter to ten.", pt: "São quinze para as dez." },
      { en: "What time do you wake up?", pt: "A que horas você acorda?" },
      { en: "I wake up at six thirty.", pt: "Eu acordo às seis e trinta." },
      { en: "I study until nine fifteen.", pt: "Eu estudo até as nove e quinze.", note: "until = duração (até)" },
      { en: "I have to finish this by ten o'clock.", pt: "Eu tenho que terminar isso até as dez horas.", note: "by = prazo (até)" },
      { en: "What time does she go to bed?", pt: "A que horas ela vai para a cama?" },
      { en: "He goes to bed at eleven forty-five.", pt: "Ele vai para a cama às onze e quarenta e cinco." },
      { en: "The class starts at six twenty.", pt: "A aula começa às seis e vinte." },
      { en: "We have until eleven fifty.", pt: "Nós temos até as onze e cinquenta." }
    ],
    exercises: [
      { question: "São sete e quinze.", answer: "It's seven fifteen" },
      { question: "São oito e meia.", answer: "It's half past eight" },
      { question: "Eu acordo às seis e trinta.", answer: "I wake up at six thirty" },
      { question: "Eu estudo até as nove e quinze.", answer: "I study until nine fifteen" },
      { question: "Eu tenho que terminar isso até as dez horas.", answer: "I have to finish this by ten o'clock" },
      { question: "A que horas ela vai para a cama?", answer: "What time does she go to bed" },
      { question: "Ele vai para a cama às onze e quarenta e cinco.", answer: "He goes to bed at eleven forty-five" },
      { question: "São quinze para as dez.", answer: "It's a quarter to ten" },
      { question: "A aula começa às seis e vinte.", answer: "The class starts at six twenty" }
    ]
  },
  {
    id: 23,
    title: "Open / Close",
    vocabulary: [
      {
        title: "Objects & Actions",
        items: [
          { en: "the door", pt: "a porta" }, { en: "the window", pt: "a janela" },
          { en: "the room", pt: "o quarto/sala" }, { en: "the house", pt: "a casa" },
          { en: "the store", pt: "a loja" }, { en: "the bottle", pt: "a garrafa" },
          { en: "twist the lid off", pt: "desrosquear a tampa" }
        ]
      }
    ],
    phrases: [
      { en: "I opened the door.", pt: "Eu abri a porta." },
      { en: "She closed the window.", pt: "Ela fechou a janela." },
      { en: "Did you close the store?", pt: "Você fechou a loja?" },
      { en: "I didn't open the bottle.", pt: "Eu não abri a garrafa." },
      { en: "He twisted the lid off.", pt: "Ele desrosqueou a tampa." },
      { en: "Who opened the house?", pt: "Quem abriu a casa?" }
    ],
    exercises: [
      { question: "Eu abri a porta.", answer: "I opened the door" },
      { question: "Ela fechou a janela.", answer: "She closed the window" },
      { question: "Você fechou a loja?", answer: "Did you close the store" },
      { question: "Eu não abri a garrafa.", answer: "I didn't open the bottle" },
      { question: "Ele desrosqueou a tampa.", answer: "He twisted the lid off" }
    ]
  },
  {
    id: 24,
    title: "Need / Prefer",
    vocabulary: [
      {
        title: "Verbs",
        items: [
          { en: "to study", pt: "estudar" }, { en: "to work", pt: "trabalhar" },
          { en: "to hurry", pt: "apressar-se" }, { en: "to leave", pt: "partir/sair" },
          { en: "to stay home", pt: "ficar em casa" }, { en: "to walk", pt: "caminhar" }
        ]
      },
      {
        title: "Adjectives",
        items: [
          { en: "alone", pt: "sozinho" }, { en: "tired", pt: "cansado" },
          { en: "healthy", pt: "saudável" }, { en: "busy", pt: "ocupado" }
        ]
      }
    ],
    phrases: [
      { en: "Why do you need to study?", pt: "Por que você precisa estudar?" },
      { en: "Because I have a test.", pt: "Porque eu tenho um teste." },
      { en: "She prefers to stay home.", pt: "Ela prefere ficar em casa." },
      { en: "Why does he prefer to walk?", pt: "Por que ele prefere caminhar?" },
      { en: "We need to leave now.", pt: "Nós precisamos sair agora." },
      { en: "They don't prefer to work alone.", pt: "Eles não preferem trabalhar sozinhos." }
    ],
    exercises: [
      { question: "Por que você precisa estudar?", answer: "Why do you need to study" },
      { question: "Porque eu tenho um teste.", answer: "Because I have a test" },
      { question: "Ela prefere ficar em casa.", answer: "She prefers to stay home" },
      { question: "Por que ele prefere caminhar?", answer: "Why does he prefer to walk" },
      { question: "Nós precisamos sair agora.", answer: "We need to leave now" }
    ]
  },
  {
    id: 25,
    title: "Weather",
    vocabulary: [
      {
        title: "Weather Conditions",
        items: [
          { en: "weather", pt: "clima/tempo" }, { en: "sunny", pt: "ensolarado" },
          { en: "cloudy", pt: "nublado" }, { en: "rainy", pt: "chuvoso" },
          { en: "foggy", pt: "nebuloso" }, { en: "snowy", pt: "nevando/nevado" },
          { en: "windy", pt: "ventando" }, { en: "hot", pt: "quente" },
          { en: "cold", pt: "frio" }, { en: "temperature", pt: "temperatura" }
        ]
      }
    ],
    phrases: [
      { en: "It was cold yesterday.", pt: "Estava frio ontem." },
      { en: "Was it sunny last week?", pt: "Estava ensolarado semana passada?" },
      { en: "It wasn't rainy.", pt: "Não estava chuvoso." },
      { en: "It's going to rain.", pt: "Vai chover." },
      { en: "It's going to be hot tomorrow.", pt: "Vai estar quente amanhã." },
      { en: "How is the weather?", pt: "Como está o clima?" }
    ],
    exercises: [
      { question: "Estava frio ontem.", answer: "It was cold yesterday" },
      { question: "Estava ensolarado semana passada?", answer: "Was it sunny last week" },
      { question: "Não estava chuvoso.", answer: "It wasn't rainy" },
      { question: "Vai chover.", answer: "It's going to rain" },
      { question: "Vai estar quente amanhã.", answer: "It's going to be hot tomorrow" }
    ]
  }
];
