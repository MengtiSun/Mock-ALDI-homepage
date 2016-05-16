/**
 * Created by AdeleSun on 13/04/2016.
 */

window.onload=function () {
    var oSpecial=document.getElementById('special_buys');
    var oShow1=document.getElementById('navShow1');

    var oGroceries=document.getElementById("groceries");
    var oShow2=document.getElementById('navShow2');

    var oShopping=document.getElementById("shopping");
    var oShow3=document.getElementById('navShow3');

    var oAldi=document.getElementById("ALDI");
    var oShow4=document.getElementById('navShow4');

    oShow1.onmouseover=oSpecial.onmouseover=function() {
        oSpecial.className='a_hover';
        oShow1.style.display='block';
    }
    oShow1.onmouseout=oSpecial.onmouseout=function() {
        oSpecial.className='';
        oShow1.style.display='none';
    }

    oShow2.onmouseover=oGroceries.onmouseover=function() {
        oGroceries.className='a_hover';
        oShow2.style.display='block';
    }
    oShow2.onmouseout=oGroceries.onmouseout=function() {
        oGroceries.className='';
        oShow2.style.display='none';
    }

    oShow3.onmouseover=oShopping.onmouseover=function() {
        oShopping.className='a_hover';
        oShow3.style.display='block';
    }
    oShow3.onmouseout=oShopping.onmouseout=function() {
        oShopping.className='';
        oShow3.style.display='none';
    }

    oShow4.onmouseover=oAldi.onmouseover=function() {
        oAldi.className='a_hover';
        oShow4.style.display='block';
    }
    oShow4.onmouseout=oAldi.onmouseout=function() {
        oAldi.className='';
        oShow4.style.display='none';
    }


    var oBtn1=document.getElementById('left_btn');
    var oBtn2=document.getElementById('right_btn');
    var oAds=document.getElementById('ads');
    var oNum=document.getElementById('number');
    var timer=null;
    oAds.innerHTML=oAds.innerHTML+oAds.innerHTML;
    oAds.style.width=oAds.offsetWidth*2+'px';

    oBtn1.onclick=function() {
        switch (oAds.offsetLeft) {
            case 0:
                oAds.style.left=-oAds.offsetWidth/2+'px';
                move(-2124);
                oNum.innerHTML='4 / 4';
                break;
            case -708:
                move(0);
                oNum.innerHTML='1 / 4';
                break;
            case -1416:
                move(-708);
                oNum.innerHTML='2 / 4';
                break;
            case -2124:
                move(-1416);
                oNum.innerHTML='3 / 4';
                break;
        }
    }

    oBtn2.onclick=function() {
        switch (oAds.offsetLeft) {
            case 0:
                move(-708);
                oNum.innerHTML='2 / 4';
                break;
            case -708:
                move(-1416);
                oNum.innerHTML='3 / 4';
                break;
            case -1416:
                move(-2124);
                oNum.innerHTML='4 / 4';
                break;
            case -2124:
                move(-2832);
                oNum.innerHTML='1 / 4';
                break;
        }
    }

    setInterval(function() {
        switch (oAds.offsetLeft) {
            case 0:
                move(-708);
                oNum.innerHTML='2 / 4';
                break;
            case -708:
                move(-1416);
                oNum.innerHTML='3 / 4';
                break;
            case -1416:
                move(-2124);
                oNum.innerHTML='4 / 4';
                break;
            case -2124:
                move(-2832);
                oNum.innerHTML='1 / 4';
                break;
        }
     },5000);

    function move(iTarget) {
        clearInterval(timer);

        timer=setInterval(function() {
            var speed=(iTarget-oAds.offsetLeft)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);


            if(oAds.offsetLeft==iTarget) {
                if(oAds.offsetLeft==-oAds.offsetWidth/2) {
                    oAds.style.left='0';
                }
                clearInterval(timer);
            }
            else {
                oAds.style.left=oAds.offsetLeft+speed+'px';
            }
        },30);
    }
}








