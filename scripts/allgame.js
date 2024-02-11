let i;
let j;
let a;
let b;
let Wmove=true;

let selected;
let selectedI;
let selectedJ;

let BKI;
let BKJ;
let WKI;
let WKJ;

let WRC=true;
let WLC=true;
let BRC=true;
let BLC=true;

let Wcheck=false;
let Bcheck=false;

let promorting=false;
let posToPromote;

let prevBoard=
`
<div class="board-line">
<button onclick="hint('a8')" class="a8 rank8 white B Brook"></button>
<button onclick="hint('b8')" class="b8 rank8 black B Bknight"></button>
<button onclick="hint('c8')" class="c8 rank8 white B Bbishop"></button>
<button onclick="hint('d8')" class="d8 rank8 black B Bqueen"></button>
<button onclick="hint('e8')" class="e8 rank8 white B Bking"></button>
    <button onclick="hint('f8')" class="f8 rank8 black B Bbishop"></button>
    <button onclick="hint('g8')" class="g8 rank8 white B Bknight"></button>
    <button onclick="hint('h8')" class="h8 rank8 black B Brook"></button>
</div>
<div class="board-line">
    <button onclick="hint('a7')" class="a7 rank7 black B Bpawn"></button>
    <button onclick="hint('b7')" class="b7 rank7 white B Bpawn"></button>
    <button onclick="hint('c7')" class="c7 rank7 black B Bpawn"></button>
    <button onclick="hint('d7')" class="d7 rank7 white B Bpawn"></button>
    <button onclick="hint('e7')" class="e7 rank7 black B Bpawn"></button>
    <button onclick="hint('f7')" class="f7 rank7 white B Bpawn"></button>
    <button onclick="hint('g7')" class="g7 rank7 black B Bpawn"></button>
    <button onclick="hint('h7')" class="h7 rank7 white B Bpawn"></button>
</div>
<div class="board-line">
    <button onclick="hint('a6')" class="a6 rank6 white E"></button>
    <button onclick="hint('b6')" class="b6 rank6 black E"></button>
    <button onclick="hint('c6')" class="c6 rank6 white E"></button>
    <button onclick="hint('d6')" class="d6 rank6 black E"></button>
    <button onclick="hint('e6')" class="e6 rank6 white E"></button>
    <button onclick="hint('f6')" class="f6 rank6 black E"></button>
    <button onclick="hint('g6')" class="g6 rank6 white E"></button>
    <button onclick="hint('h6')" class="h6 rank6 black E"></button>
</div>
<div class="board-line">
    <button onclick="hint('a5')" class="a5 rank5 black E"></button>
    <button onclick="hint('b5')" class="b5 rank5 white E"></button>
    <button onclick="hint('c5')" class="c5 rank5 black E"></button>
    <button onclick="hint('d5')" class="d5 rank5 white E"></button>
    <button onclick="hint('e5')" class="e5 rank5 black E"></button>
    <button onclick="hint('f5')" class="f5 rank5 white E"></button>
    <button onclick="hint('g5')" class="g5 rank5 black E"></button>
    <button onclick="hint('h5')" class="h5 rank5 white E"></button>
</div>
<div class="board-line">
    <button onclick="hint('a4')" class="a4 rank4 white E"></button>
    <button onclick="hint('b4')" class="b4 rank4 black E"></button>
    <button onclick="hint('c4')" class="c4 rank4 white E"></button>
    <button onclick="hint('d4')" class="d4 rank4 black E"></button>
    <button onclick="hint('e4')" class="e4 rank4 white E"></button>
    <button onclick="hint('f4')" class="f4 rank4 black E"></button>
    <button onclick="hint('g4')" class="g4 rank4 white E"></button>
    <button onclick="hint('h4')" class="h4 rank4 black E"></button>
</div>
<div class="board-line">
    <button onclick="hint('a3')" class="a3 rank3 black E"></button>
    <button onclick="hint('b3')" class="b3 rank3 white E"></button>
    <button onclick="hint('c3')" class="c3 rank3 black E"></button>
    <button onclick="hint('d3')" class="d3 rank3 white E"></button>
    <button onclick="hint('e3')" class="e3 rank3 black E"></button>
    <button onclick="hint('f3')" class="f3 rank3 white E"></button>
    <button onclick="hint('g3')" class="g3 rank3 black E"></button>
    <button onclick="hint('h3')" class="h3 rank3 white E"></button>
</div>
<div class="board-line">
    <button onclick="hint('a2')" class="a2 rank2 white W Wpawn"></button>
    <button onclick="hint('b2')" class="b2 rank2 black W Wpawn"></button>
    <button onclick="hint('c2')" class="c2 rank2 white W Wpawn"></button>
    <button onclick="hint('d2')" class="d2 rank2 black W Wpawn"></button>
    <button onclick="hint('e2')" class="e2 rank2 white W Wpawn"></button>
    <button onclick="hint('f2')" class="f2 rank2 black W Wpawn"></button>
    <button onclick="hint('g2')" class="g2 rank2 white W Wpawn"></button>
    <button onclick="hint('h2')" class="h2 rank2 black W Wpawn"></button>
</div>
<div class="board-line">
    <button onclick="hint('a1')" class="a1 rank1 black W Wrook"></button>
    <button onclick="hint('b1')" class="b1 rank1 white W Wknight"></button>
    <button onclick="hint('c1')" class="c1 rank1 black W Wbishop"></button>
    <button onclick="hint('d1')" class="d1 rank1 white W Wqueen"></button>
    <button onclick="hint('e1')" class="e1 rank1 black W Wking"></button>
    <button onclick="hint('f1')" class="f1 rank1 white W Wbishop"></button>
    <button onclick="hint('g1')" class="g1 rank1 black W Wknight"></button>
    <button onclick="hint('h1')" class="h1 rank1 white W Wrook"></button>
</div>
`;

let newBoard=prevBoard;

let boardPosition=[
    ['a8','b8','c8','d8','e8','f8','g8','h8'],
    ['a7','b7','c7','d7','e7','f7','g7','h7'],
    ['a6','b6','c6','d6','e6','f6','g6','h6'],
    ['a5','b5','c5','d5','e5','f5','g5','h5'],
    ['a4','b4','c4','d4','e4','f4','g4','h4'],
    ['a3','b3','c3','d3','e3','f3','g3','h3'],
    ['a2','b2','c2','d2','e2','f2','g2','h2'],
    ['a1','b1','c1','d1','e1','f1','g1','h1']
];

buildBoard();
setBoard();

function setBoard(){
    document.querySelectorAll('button').forEach(value=>{
        if(value.classList.contains('Wpawn')){
            value.innerHTML=`<img class="pieces" src="ChessElem/Wpawn.png">`;
        }
        else if(value.classList.contains('Wrook')){
            value.innerHTML=`<img class="pieces" src="ChessElem/Wrook.png">`;
        }
        else if(value.classList.contains('Wknight')){
            value.innerHTML=`<img class="pieces" src="ChessElem/Wknight.png">`;
        }
        else if(value.classList.contains('Wbishop')){
            value.innerHTML=`<img class="pieces" src="ChessElem/Wbishop.png">`;
        }
        else if(value.classList.contains('Wqueen')){
            value.innerHTML=`<img class="pieces" src="ChessElem/Wqueen.png">`;
        }
        else if(value.classList.contains('Wking')){
            value.innerHTML=`<img class="pieces" src="ChessElem/Wking.png">`;
        }
        else if(value.classList.contains('Bpawn')){
            value.innerHTML=`<img class="pieces" src="ChessElem/Bpawn.png">`;
        }
        else if(value.classList.contains('Brook')){
            value.innerHTML=`<img class="pieces" src="ChessElem/Brook.png">`;
        }
        else if(value.classList.contains('Bknight')){
            value.innerHTML=`<img class="pieces" src="ChessElem/Bknight.png">`;
        }
        else if(value.classList.contains('Bbishop')){
            value.innerHTML=`<img class="pieces" src="ChessElem/Bbishop.png">`;
        }
        else if(value.classList.contains('Bqueen')){
            value.innerHTML=`<img class="pieces" src="ChessElem/Bqueen.png">`;
        }
        else if(value.classList.contains('Bking')){
            value.innerHTML=`<img class="pieces" src="ChessElem/Bking.png">`;
        }
        else if(value.classList.contains('E')){
            value.innerHTML='';
        }
        kingPosition();
    });
}
function buildBoard(){
    document.querySelector('.board').innerHTML=prevBoard;
}


function hint(str){
    boardPosition.forEach((valueI,indexI)=>{
        valueI.forEach((valueJ,indexJ)=>{
            if(valueJ===str){
                i=indexI;
                j=indexJ;
            }
        });
    });
    if(promorting){}

    else if(document.querySelector(`.${str}`).classList.contains('canEnpassant')){

        removeMark();
        removeEnpassant();

        if(Wmove){
            enpassantMove(selected,str,boardPosition[i+1][j]);
        }
        else{
            enpassantMove(selected,str,boardPosition[i-1][j]);
        }

        Wmove=(Wmove)?false:true;

        whileMove();

    }
    else if(document.querySelector(`.${str}`).classList.contains('castle')){

        removeMark();
        removeEnpassant();

        if(j===selectedJ-2){
            moveToCastle(selected,str,boardPosition[i][j-2],boardPosition[i][j+1]);
        }
        if(j===selectedJ+2){
            moveToCastle(selected,str,boardPosition[i][j+1],boardPosition[i][j-1]);
        }

        Wmove=(Wmove)?false:true;

        whileMove();

    }
    else if(document.querySelector(`.${str}`).classList.contains('marked')){

        removeMark();
        removeEnpassant();

        moveToMarked(selected,str);

        Wmove=(Wmove)?false:true;

        whileMove();

    }
    else if(document.querySelector(`.${str}`).classList.contains('capture')){

        removeMark();
        removeEnpassant();

        moveToCapture(selected,str);

        Wmove=(Wmove)?false:true;

        whileMove();
    }
    else if(!document.querySelector(`.${str}`).classList.contains('marked')){
        removeMark();
        if(document.querySelector(`.${str}`).innerHTML!==''){
            Move(Wmove);
            document.querySelectorAll('.marked').forEach(value=>{
                value.innerHTML+=`<img class="hint" src="ChessElem/marker.png">`;
            });
            document.querySelectorAll('.castle').forEach(value=>{
                value.innerHTML+=`<img class="hint" src="ChessElem/marker.png">`;
            });
            document.querySelectorAll('.canEnpassant').forEach(value=>{
                value.innerHTML+=`<img class="hint" src="ChessElem/marker.png">`;
            });
            selected=str;
            selectedI=i;
            selectedJ=j;
        }
    }
}


function removeMark(){
    document.querySelectorAll('.marked').forEach(value=>{
        value.innerHTML='';
        value.classList.remove('marked');
    });
    document.querySelectorAll('.capture').forEach(value=>{
        value.classList.remove('capture');
    });
    document.querySelectorAll('.castle').forEach(value=>{
        value.classList.remove('castle');
    });
    document.querySelectorAll('.canEnpassant').forEach(value=>{
        value.innerHTML='';
        value.classList.remove('canEnpassant');
    });
}
function removeEnpassant(){
    if(document.querySelector('.enpassant')){
        document.querySelector('.enpassant').classList.remove('enpassant');
    }
}


function moveToMarked(from,to){
    let WorB=document.querySelector(`.${to}`).classList[3];
    let pieceClass=document.querySelector(`.${to}`).classList[4];

    document.querySelector(`.${to}`).classList.remove(`${document.querySelector(`.${to}`).classList[4]}`,`${document.querySelector(`.${to}`).classList[3]}`);
    
    document.querySelector(`.${to}`).classList.add(`${document.querySelector(`.${from}`).classList[3]}`,`${document.querySelector(`.${from}`).classList[4]}`);

    document.querySelector(`.${from}`).classList.remove(`${document.querySelector(`.${from}`).classList[4]}`,`${document.querySelector(`.${from}`).classList[3]}`);

    document.querySelector(`.${from}`).classList.add(`${WorB}`,`${pieceClass}`);
    
}
function moveToCapture(from,to){

    document.querySelector(`.${to}`).classList.remove(`${document.querySelector(`.${to}`).classList[4]}`,`${document.querySelector(`.${to}`).classList[3]}`);
    
    document.querySelector(`.${to}`).classList.add(`${document.querySelector(`.${from}`).classList[3]}`,`${document.querySelector(`.${from}`).classList[4]}`);

    document.querySelector(`.${from}`).classList.remove(`${document.querySelector(`.${from}`).classList[4]}`,`${document.querySelector(`.${from}`).classList[3]}`);

    document.querySelector(`.${from}`).classList.add(`E`);
}
function moveToCastle(fromK,toK,fromR,toR){
    moveToMarked(fromK,toK);
    moveToMarked(fromR,toR);
}
function enpassantMove(from,to,capturePiece){

    moveToMarked(from,to);

    document.querySelector(`.${capturePiece}`).classList.remove(`${document.querySelector(`.${capturePiece}`).classList[4]}`,`${document.querySelector(`.${capturePiece}`).classList[3]}`);

    document.querySelector(`.${capturePiece}`).classList.add(`E`);

}


function checkValid(from,to,process,string){ 
    prevBoard=document.querySelector('.board').innerHTML;
    process(from,to);
    setBoard();
    if(!checkOwn()){
        buildBoard();
        document.querySelector(`.${to}`)
            .classList.add(`${string}`);
    }
    else{
        buildBoard();
    }
}
function checkValidCastle(fromK,toK,fromR,toR){
    prevBoard=document.querySelector('.board').innerHTML;
    moveToCastle(fromK,toK,fromR,toR);
    setBoard();
    if(!checkOwn()){
        buildBoard();
        document.querySelector(`.${toK}`)
            .classList.add(`castle`);
    }
    else{
        buildBoard();
    }
}
function checkValidEnpassant(from,to,capturePiece){
    prevBoard=document.querySelector('.board').innerHTML;
    enpassantMove(from,to,capturePiece);
    setBoard();
    if(!checkOwn()){
        buildBoard();
        document.querySelector(`.${to}`)
            .classList.add(`canEnpassant`);
    }
    else{
        buildBoard();
    }
}



function checkOwn(){

    let x;
    let y;
    if(Wmove){
        
        for(x=WKI-1,y=WKJ;x>=0;x--){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Brook`) || document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bqueen`)){
                return true;
            }
            else{
                break;
            }
        }
        for(x=WKI+1,y=WKJ;x<8;x++){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Brook`) || document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bqueen`)){
                return true;
            }
            else{
                break;
            }
        }
        for(x=WKI,y=WKJ-1;y>=0;y--){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Brook`) || document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bqueen`)){
                return true;
            }
            else{
                break;
            }
        }
        for(x=WKI,y=WKJ+1;y<8;y++){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Brook`) || document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bqueen`)){
                return true;
            }
            else{
                break;
            }
        }

        x=WKI-1;
        y=WKJ;
        if(x>=0){
            if(y<7 && document.querySelector(`.${boardPosition[x][y+1]}`).innerHTML!=='' && x>=0 && document.querySelector(`.${boardPosition[x][y+1]}`).classList.contains(`Bpawn`)){
                return true;
            }
            if(y>0 && document.querySelector(`.${boardPosition[x][y-1]}`).innerHTML!=='' && x>=0 && document.querySelector(`.${boardPosition[x][y-1]}`).classList.contains(`Bpawn`)){
                return true;
            }
        }

        for(x=WKI-1,y=WKJ-1;x>=0&&y>=0;x--,y--){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bbishop`) || document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bqueen`)){
                return true;
            }
            else{
                break;
            }
        }
        for(x=WKI-1,y=WKJ+1;x>=0&&y<=7;x--,y++){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bbishop`) || document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bqueen`)){
                return true;
            }
            else{
                break;
            }
        }
        for(x=WKI+1,y=WKJ+1;x<=7&&y<=7;x++,y++){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bbishop`) || document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bqueen`)){
                return true;
            }
            else{
                break;
            }
        }
        for(x=WKI+1,y=WKJ-1;x<=7&&y>=0;x++,y--){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bbishop`) || document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bqueen`)){
                return true;
            }
            else{
                break;
            }
        }

        x=WKI-2;
        y=WKJ-1;
        if(x>=0 && x<8 && y>=0 && y<8 ){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bknight`)){
                return true;
            }
        }
        y=WKJ+1;
        if(x>=0 && x<8 && y>=0 && y<8 ){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bknight`)){
                return true;
            }
        }
        x=WKI+2;
        y=WKJ-1;
        if(x>=0 && x<8 && y>=0 && y<8 ){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bknight`)){
                return true;
            }
        }
        y=WKJ+1;
        if(x>=0 && x<8 && y>=0 && y<8 ){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bknight`)){
                return true;
            }
        }
        y=WKJ-2;
        x=WKI-1;
        if(x>=0 && x<8 && y>=0 && y<8 ){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bknight`)){
                return true;
            }
        }
        x=WKI+1;
        if(x>=0 && x<8 && y>=0 && y<8 ){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bknight`)){
                return true;
            }
        }
        y=WKJ+2;
        x=WKI-1;
        if(x>=0 && x<8 && y>=0 && y<8 ){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bknight`)){
                return true;
            }
        }
        x=WKI+1;
        if(x>=0 && x<8 && y>=0 && y<8 ){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bknight`)){
                return true;
            }
        }

        for(x=WKI-1;x<WKI+2;x++){
            for(y=WKJ-1;y<WKJ+2;y++){
                if(x===WKI&&y===WKJ){
                    continue;
                }
                if(x>=0 && x<8 && y>=0 && y<8 ){
                    if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
                    else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Bking`)){
                        return true;
                    }
                }
            }
        }
    }

    else{
        for(x=BKI-1,y=BKJ;x>=0;x--){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wrook`) || document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wqueen`)){
                return true;
            }
            else{
                break;
            }
        }
        for(x=BKI+1,y=BKJ;x<8;x++){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wrook`) || document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wqueen`)){
                return true;
            }
            else{
                break;
            }
        }
        for(x=BKI,y=BKJ-1;y>=0;y--){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wrook`) || document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wqueen`)){
                return true;
            }
            else{
                break;
            }
        }
        for(x=BKI,y=BKJ+1;y<8;y++){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wrook`) || document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wqueen`)){
                return true;
            }
            else{
                break;
            }
        }

        x=BKI+1;
        y=BKJ;
        if(x<7){
            if(y<7){
                if(document.querySelector(`.${boardPosition[x][y+1]}`).innerHTML!=='' && document.querySelector(`.${boardPosition[x][y+1]}`).classList.contains(`Wpawn`)){
                    return true;
                }
            }
            if(y>0){
                if(document.querySelector(`.${boardPosition[x][y-1]}`).innerHTML!=='' && document.querySelector(`.${boardPosition[x][y-1]}`).classList.contains(`Wpawn`)){
                    return true;
                }
            }
        }

        for(x=BKI-1,y=BKJ-1;x>=0&&y>=0;x--,y--){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wbishop`) || document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wqueen`)){
                return true;
            }
            else{
                break;
            }
        }
        for(x=BKI-1,y=BKJ+1;x>=0&&y<=7;x--,y++){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wbishop`) || document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wqueen`)){
                return true;
            }
            else{
                break;
            }
        }
        for(x=BKI+1,y=BKJ+1;x<=7&&y<=7;x++,y++){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wbishop`) || document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wqueen`)){
                return true;
            }
            else{
                break;
            }
        }
        for(x=BKI+1,y=BKJ-1;x<=7&&y>=0;x++,y--){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wbishop`) || document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wqueen`)){
                return true;
            }
            else{
                break;
            }
        }

        x=BKI-2;
        y=BKJ-1;
        if(x>=0 && x<8 && y>=0 && y<8 ){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wknight`)){
                return true;
            }
        }
        y=BKJ+1;
        if(x>=0 && x<8 && y>=0 && y<8 ){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wknight`)){
                return true;
            }
        }
        x=BKI+2;
        y=BKJ-1;
        if(x>=0 && x<8 && y>=0 && y<8 ){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wknight`)){
                return true;
            }
        }
        y=BKJ+1;
        if(x>=0 && x<8 && y>=0 && y<8 ){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wknight`)){
                return true;
            }
        }
        y=BKJ-2;
        x=BKI-1;
        if(x>=0 && x<8 && y>=0 && y<8 ){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wknight`)){
                return true;
            }
        }
        x=BKI+1;
        if(x>=0 && x<8 && y>=0 && y<8 ){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wknight`)){
                return true;
            }
        }
        y=BKJ+2;
        x=BKI-1;
        if(x>=0 && x<8 && y>=0 && y<8 ){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wknight`)){
                return true;
            }
        }
        x=BKI+1;
        if(x>=0 && x<8 && y>=0 && y<8 ){
            if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
            else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wknight`)){
                return true;
            }
        }

        for(x=BKI-1;x<BKI+2;x++){
            for(y=BKJ-1;y<BKJ+2;y++){
                if(x===BKI&&y===BKJ){
                    continue;
                }
                if(x>=0 && x<8 && y>=0 && y<8 ){
                    if(document.querySelector(`.${boardPosition[x][y]}`).innerHTML===''){}
                    else if(document.querySelector(`.${boardPosition[x][y]}`).classList.contains(`Wking`)){
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
function checkForStaleMate(){
    let playerCheck = checkOwn();
    document.querySelectorAll('button').forEach((value) => {
        boardPosition.forEach((valueI,indexI)=>{
            valueI.forEach((valueJ,indexJ)=>{
                if(valueJ===value.classList[0]){
                    i=indexI;
                    j=indexJ;
                }
            });
        });
        Move(Wmove);
    })
    if(document.querySelectorAll('.marked').length===0 && document.querySelectorAll('.capture').length===0){
        if(playerCheck){
            let str=(!Wmove)?'WHITE':'BLACK';
            document.querySelector('.result').innerHTML=`<p>CHECKMATE : ${str} WINS</p><button class="newGame" onclick="setnew();">NEW GAME</button>`;
        }
        else{
            document.querySelector('.result').innerHTML=`<p>STALEMATE</p><button class="newGame" onclick="setnew();">NEW GAME</button>`;
        }
    }
    removeMark();
}
function checkCastling(){
    if(!document.querySelector('.a1').classList.contains('Wrook')){
        WLC=false;
    }
    if(!document.querySelector('.h1').classList.contains('Wrook')){
        WRC=false;
    }
    if(!document.querySelector('.e1').classList.contains('Wking')){
        WRC=false;
        WLC=false;
    }
    if(!document.querySelector('.a8').classList.contains('Brook')){
        BLC=false;
    }
    if(!document.querySelector('.h8').classList.contains('Brook')){
        BRC=false;
    }
    if(!document.querySelector('.e8').classList.contains('Bking')){
        BRC=false;
        BLC=false;
    }
}



function Move(turn){
    if(turn){
        if(document.querySelector(`.${boardPosition[i][j]}`).classList.contains('Wpawn')){
            WpawnMove('B');
        }
        else if(document.querySelector(`.${boardPosition[i][j]}`).classList.contains('Wknight')){
            knightMove('B');
        }
        else if(document.querySelector(`.${boardPosition[i][j]}`).classList.contains('Wrook')){
            rookMove('B');
        }
        else if(document.querySelector(`.${boardPosition[i][j]}`).classList.contains('Wbishop')){
            bishopMove('B');
        }
        else if(document.querySelector(`.${boardPosition[i][j]}`).classList.contains('Wqueen')){
            queenMove('B');
        }
        else if(document.querySelector(`.${boardPosition[i][j]}`).classList.contains('Wking')){
            kingMove('B');
        }
    }
    else{
        if(document.querySelector(`.${boardPosition[i][j]}`).classList.contains('Bpawn')){
            BpawnMove('W');
        }
        else if(document.querySelector(`.${boardPosition[i][j]}`).classList.contains('Bknight')){
            knightMove('W');
        }
        else if(document.querySelector(`.${boardPosition[i][j]}`).classList.contains('Brook')){
            rookMove('W');
        }
        else if(document.querySelector(`.${boardPosition[i][j]}`).classList.contains('Bbishop')){
            bishopMove('W');
        }
        else if(document.querySelector(`.${boardPosition[i][j]}`).classList.contains('Bqueen')){
            queenMove('W');
        }
        else if(document.querySelector(`.${boardPosition[i][j]}`).classList.contains('Bking')){
            kingMove('W');
        }
    }
}

function bishopMove(string){
    for(a=i-1,b=j-1;a>=0&&b>=0;a--,b--){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
            break;
        }
        else{
            break;
        }
    }
    for(a=i-1,b=j+1;a>=0&&b<=7;a--,b++){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
            break;
        }
        else{
            break;
        }
    }
    for(a=i+1,b=j+1;a<=7&&b<=7;a++,b++){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
            break;
        }
        else{
            break;
        }
    }
    for(a=i+1,b=j-1;a<=7&&b>=0;a++,b--){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
            break;
        }
        else{
            break;
        }
    }
}
function WpawnMove(string){
    a=i-1;
    b=j;
    if(document.querySelector(`.${boardPosition[i][j]}`).classList.contains('rank2')){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        if(document.querySelector(`.${boardPosition[a-1][b]}`).innerHTML==='' && document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a-1][b],moveToMarked,'marked');
        }
    }
    else if(a>=0){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
    }
    if(a>=0){
        if(b<7 && document.querySelector(`.${boardPosition[a][b+1]}`).innerHTML!=='' && a>=0 && document.querySelector(`.${boardPosition[a][b+1]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b+1],moveToCapture,'capture');
        }
        if(b>0 && document.querySelector(`.${boardPosition[a][b-1]}`).innerHTML!=='' && a>=0 && document.querySelector(`.${boardPosition[a][b-1]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b-1],moveToCapture,'capture');
        }
    }
    if(a>=0){
        if(b<7 && document.querySelector(`.${boardPosition[a][b+1]}`).innerHTML==='' && a>=0 && document.querySelector(`.${boardPosition[a+1][b+1]}`).classList.contains(`${string}`) && document.querySelector(`.${boardPosition[a+1][b+1]}`).classList.contains(`enpassant`)){
            checkValidEnpassant(boardPosition[i][j],boardPosition[a][b+1],boardPosition[a+1][b+1]);
        }
        if(b>0 && document.querySelector(`.${boardPosition[a][b-1]}`).innerHTML==='' && a>=0 && document.querySelector(`.${boardPosition[a+1][b-1]}`).classList.contains(`${string}`) && document.querySelector(`.${boardPosition[a+1][b-1]}`).classList.contains(`enpassant`)){
            checkValidEnpassant(boardPosition[i][j],boardPosition[a][b-1],boardPosition[a+1][b-1]);
        }
    }
}
function rookMove(string){
    for(a=i-1,b=j;a>=0;a--){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
            break;
        }
        else{
            break;
        }
    }
    for(a=i+1,b=j;a<8;a++){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
            break;
        }
        else{
            break;
        }
    }
    for(a=i,b=j-1;b>=0;b--){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
            break;
        }
        else{
            break;
        }
    }
    for(a=i,b=j+1;b<8;b++){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
            break;
        }
        else{
            break;
        }
    }
}
function knightMove(string){
    a=i-2;
    b=j-1;
    if(a>=0 && a<8 && b>=0 && b<8 ){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
        }
    }

    b=j+1;
    if(a>=0 && a<8 && b>=0 && b<8 ){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
        }
    }

    a=i+2;
    b=j-1;
    if(a>=0 && a<8 && b>=0 && b<8 ){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
        }
    }

    b=j+1;
    if(a>=0 && a<8 && b>=0 && b<8 ){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
        }
    }

    b=j-2;
    a=i-1;
    if(a>=0 && a<8 && b>=0 && b<8 ){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
        }
    }

    a=i+1;
    if(a>=0 && a<8 && b>=0 && b<8 ){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
        }
    }

    b=j+2;
    a=i-1;
    if(a>=0 && a<8 && b>=0 && b<8 ){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
        }
    }

    a=i+1;
    if(a>=0 && a<8 && b>=0 && b<8 ){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
        }
    }
}
function BpawnMove(string){
    a=i+1;
    b=j;
    if(document.querySelector(`.${boardPosition[i][j]}`).classList.contains('rank7')){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
        if(document.querySelector(`.${boardPosition[a+1][b]}`).innerHTML==='' && document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a+1][b],moveToMarked,'marked');
        } 
    }
    else if(a<8){
        if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
            checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
        }
    }
    if(a<8){
        if(b<7 && document.querySelector(`.${boardPosition[a][b+1]}`).innerHTML!=='' && a>=0 && document.querySelector(`.${boardPosition[a][b+1]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b+1],moveToCapture,'capture');
        }
        if(b>0 && document.querySelector(`.${boardPosition[a][b-1]}`).innerHTML!=='' && a>=0 && document.querySelector(`.${boardPosition[a][b-1]}`).classList.contains(`${string}`)){
            checkValid(boardPosition[i][j],boardPosition[a][b-1],moveToCapture,'capture');
        }
    }
    if(a<8){
        if(b<7 && document.querySelector(`.${boardPosition[a][b+1]}`).innerHTML==='' && a>=0 && document.querySelector(`.${boardPosition[a-1][b+1]}`).classList.contains(`${string}`) && document.querySelector(`.${boardPosition[a-1][b+1]}`).classList.contains(`enpassant`)){
            checkValidEnpassant(boardPosition[i][j],boardPosition[a][b+1],boardPosition[a-1][b+1]);
        }
        if(b>0 && document.querySelector(`.${boardPosition[a][b-1]}`).innerHTML==='' && a>=0 && document.querySelector(`.${boardPosition[a-1][b-1]}`).classList.contains(`${string}`) && document.querySelector(`.${boardPosition[a-1][b-1]}`).classList.contains(`enpassant`)){
            checkValidEnpassant(boardPosition[i][j],boardPosition[a][b-1],boardPosition[a-1][b-1]);
        }
    }
}
function kingMove(string){
    for(a=i-1;a<i+2;a++){
        for(b=j-1;b<j+2;b++){
            if(a===i&&b===j){
                continue;
            }
            if(a>=0 && a<8 && b>=0 && b<8 ){
                if(document.querySelector(`.${boardPosition[a][b]}`).innerHTML===''){
                    checkValid(boardPosition[i][j],boardPosition[a][b],moveToMarked,'marked');
                }
                else if(document.querySelector(`.${boardPosition[a][b]}`).classList.contains(`${string}`)){
                    checkValid(boardPosition[i][j],boardPosition[a][b],moveToCapture,'capture');
                }
            }
        }
    }

    a=i;
    b=j;
    if(Wmove){
        if(document.querySelector(`.${boardPosition[a][b-1]}`).innerHTML==='' && document.querySelector(`.${boardPosition[a][b-2]}`).innerHTML==='' && document.querySelector(`.${boardPosition[a][b-3]}`).innerHTML==='' && WLC){
            checkValidCastle(boardPosition[a][b],boardPosition[a][b-2],boardPosition[a][b-4],boardPosition[a][b-1]);
        }
        if(document.querySelector(`.${boardPosition[a][b+1]}`).innerHTML==='' && document.querySelector(`.${boardPosition[a][b+2]}`).innerHTML==='' && WRC){
            checkValidCastle(boardPosition[a][b],boardPosition[a][b+2],boardPosition[a][b+3],boardPosition[a][b+1]);
        }
    }
    else{
        if(document.querySelector(`.${boardPosition[a][b-1]}`).innerHTML==='' && document.querySelector(`.${boardPosition[a][b-2]}`).innerHTML==='' && document.querySelector(`.${boardPosition[a][b-3]}`).innerHTML==='' && BLC){
            checkValidCastle(boardPosition[a][b],boardPosition[a][b-2],boardPosition[a][b-4],boardPosition[a][b-1]);
        }
        if(document.querySelector(`.${boardPosition[a][b+1]}`).innerHTML==='' && document.querySelector(`.${boardPosition[a][b+2]}`).innerHTML==='' && BRC){
            checkValidCastle(boardPosition[a][b],boardPosition[a][b+2],boardPosition[a][b+3],boardPosition[a][b+1]);
        }
    }
}
function queenMove(string){
    bishopMove(string);
    rookMove(string);
}


function promotion(){
    document.querySelectorAll('.rank8').forEach(value => {
        if(value.classList.contains('Wpawn')){
            promorting=true;
            posToPromote = value.classList[0];
            document.querySelector('.promote').innerHTML=
            `
            <div class="promotionPanel">
                <button class="promotingPiece" onclick="promote(posToPromote,'Wqueen','W');"><img class="piecesOption" src="ChessElem/Wqueen.png"></button>
                <button class="promotingPiece" onclick="promote(posToPromote,'Wrook','W');"><img class="piecesOption" src="ChessElem/Wrook.png"></button>
                <button class="promotingPiece" onclick="promote(posToPromote,'Wknight','W');"><img class="piecesOption" src="ChessElem/Wknight.png"></button>
                <button class="promotingPiece" onclick="promote(posToPromote,'Wbishop','W');"><img class="piecesOption" src="ChessElem/Wbishop.png"></button>
            </div>
            `;
        }
    });


    document.querySelectorAll('.rank1').forEach(value => {
        if(value.classList.contains('Bpawn')){
            promorting=true;
            posToPromote = value.classList[0];
            document.querySelector('.promote').innerHTML=
            `
            <div class="promotionPanel">
                <button class="promotingPiece" onclick="promote(posToPromote,'Bqueen','B');"><img class="piecesOption" src="ChessElem/Bqueen.png"></button>
                <button class="promotingPiece" onclick="promote(posToPromote,'Brook','B');"><img class="piecesOption" src="ChessElem/Brook.png"></button>
                <button class="promotingPiece" onclick="promote(posToPromote,'Bknight','B');"><img class="piecesOption" src="ChessElem/Bknight.png"></button>
                <button class="promotingPiece" onclick="promote(posToPromote,'Bbishop','B');"><img class="piecesOption" src="ChessElem/Bbishop.png"></button>
            </div>
            `;
        }
    });
}
function promote(string,piece,color){
    document.querySelector(`.${string}`).classList.replace(`${color}pawn`,`${piece}`);
    setBoard();
    checkForStaleMate();
    document.querySelector('.promote').innerHTML='';
    promorting=false;
}


function enpassant(str){
    if(!Wmove && document.querySelector(`.${str}`).classList.contains('Wpawn')){
        if(selectedI-2===i){
            document.querySelector(`.${str}`).classList.add('enpassant');
            // console.log(document.querySelector(`.${str}`).classList);
        }
    }
    if(Wmove && document.querySelector(`.${str}`).classList.contains('Bpawn')){
        if(selectedI+2===i){
            document.querySelector(`.${str}`).classList.add('enpassant');
        }
    }
}

function kingPosition(){
    boardPosition.forEach((valueI,indexI)=>{
        valueI.forEach((valueJ,indexJ)=>{
            if(document.querySelector(`.${valueJ}`).classList.contains('Wking')){
                WKI=indexI;
                WKJ=indexJ;
            }
        });
    });
    boardPosition.forEach((valueI,indexI)=>{
        valueI.forEach((valueJ,indexJ)=>{
            if(document.querySelector(`.${valueJ}`).classList.contains('Bking')){
                BKI=indexI;
                BKJ=indexJ;
            }
        });
    });
}

function whileMove(){
    setBoard();
    checkCastling();

    promotion();

    enpassant(boardPosition[i][j]);

    checkForStaleMate();
}


function setnew(){
    WRC=true;
    WLC=true;
    BRC=true;
    BLC=true;
    Wmove=true;
    Wcheck=false;
    Bcheck=false;
    promorting=false;
    prevBoard=newBoard;
    buildBoard();
    setBoard();
    document.querySelector('.result').innerHTML='';
}
