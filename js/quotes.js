const quotes = [
{
    quote : "간단함이 훌륭함의 열쇠다.",
    author : "이소룡",   
}, 
{ 
    quote : "승리하면 조금 배울 수 있고,패배하면 모든 것을 배울 수 있다.",
    author : "크리스티 메튜슨", 
},
{
    quote : "말만 하고 행동하지 않는 사람은 잡초로 가득 찬 정원과 같다.",  
    author : "하우얼",
}, 
{ 
    quote : "바람이 불지 않으면 노를 저어라.",
    author : "윈스턴 처칠", 
}, 
{
    quote : "낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.", 
    author : "메이슨 쿨리", 
}, 
{
    quote : "산을 움직이려 하는 이는 작은 돌을 들어내는 일로 시작한다.", 
    author : "공자"    
}, 
{
    quote : "들은 것은 잊어버리고,본 것은 기억하고 직접 해본 것은 이해한다.",
    author : "공자", 
},
{
    quote : "아이디어의 좋고 나쁨은 어떻게 실행하느냐에 따라 결정된다.",
    author : "카를로스 곤",
},
{
    quote : "인생은 원래 공평하지 못하다. 그런 현실에 대하여 불평할 생각하지 말고 받아들여라.", 
    author : "빌 게이츠",
},
{
    quote : "다리를 움직이지 않고는 작은 도랑도 건널 수 없다.", 
    author : "알랭",

}
]; 

// 명언모음 : https://langho.tistory.com/1

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;