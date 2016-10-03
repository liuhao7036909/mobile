$(function(){
//图片轮播
	var banner=$(".center-banner")[0];
	var imgs=$(".center-banner-img");
	var circles=$(".circle");
	var left=$(".center-banner-div1")[0];
	var right=$(".center-banner-div2")[0];
	var n=0;
	var next=0;
	var flag=true;
    var width=parseInt(getStyle(imgs[0],"width"));
	var t=setInterval(move1,2000);
	
    function move1(){
        if(!flag){
        	return;
        }
        flag=false;
        next=n+1;
		if(next>=imgs.length){
			next=0;
		}
         for(var i=0;i<imgs.length;i++){
            circles[i].style.background="#fff";
            // imgs[i].style.opacity=0;
        }
            circles[next].style.background="red";
            // imgs[n].style.opacity=1; 
            imgs[next].style.left=-width+"px";
            animate(imgs[n],{left:width},500);
		    animate(imgs[next],{left:0},500,function(){
		    	flag=true;
		    });
            // animate(imgs[n],{opacity:0},500);
            // // console.log(n)
            // animate(imgs[next],{opacity:1},500);
            // console.log(next)
		    n=next;
    }
    function move(){
    	if(!flag){
        	return;
        }
        flag=false;
		next=n-1;
        if(next<0){          
        	next=imgs.length-1;
        }
		for(var i=0;i<imgs.length;i++){
			circles[i].style.background="#fff";
            // imgs[i].style.opacity=0;
		}
		    circles[n].style.background="red";
     // imgs[next].style.opacity=1;
		    imgs[next].style.left=width+"px";
		    animate(imgs[n],{left:-width},500);
		    animate(imgs[next],{left:0},500,function(){
		    	flag=true;
		    });
            //  animate(imgs[n],{opacity:0},500);
            // animate(imgs[next],{opacity:1},500,function(){
            //     flag=true;
            // });
		    n=next;  
	}
    banner.onmouseover=function(){
    	clearInterval(t);
    }
    banner.onmouseout=function(){
    	t=window.setInterval(move,2000);;
    }
    left.onclick=function(){          
            move();
    }
    right.onclick=function(){
            move1();
    }
    for(var i=0;i<circles.length;i++){
    	circles[i].index=i;
    	circles[i].onmousemove=function(){
    		if(this.index==0){
    			return;
    		}else if(this.index>n){
    			    if(!flag){
        	               return;
                      }
                     flag=false;
    			for(var i=0;i<imgs.length;i++){
					circles[i].style.background="#fff";
                     // imgs[i].style.opacity=0;
			    }
			        circles[this.index].style.background="red";
                    // imgs[this.index].style.opacity=1;
			        imgs[this.index].style.left=width+"px";    
                    animate(imgs[n],{left:-width},500);   
                    animate(imgs[this.index],{left:0},500,function(){
                    	flag=true;
                    });
            // animate(imgs[n],{opacity:0},500);
            // animate(imgs[this.index],{opacity:1},500,function(){
            //     flag=true;
            // });
                    n=this.index;
            }else if(this.index<n){ 
                    if(!flag){
        	               return;
                      }
                     flag=false;                
            	for(var i=0;i<imgs.length;i++){
					circles[i].style.background="#fff";
                    // imgs[i].style.opacity=0;
			    }
			    circles[this.index].style.background="red";
                    // imgs[this.index].style.opacity=1;
			        imgs[this.index].style.left=-width+"px";    
                    animate(imgs[n],{left:width},500);   
                    animate(imgs[this.index],{left:0},500,function(){
                    	flag=true;
                    });
            // animate(imgs[n],{opacity:0},500);
            // animate(imgs[this.index],{opacity:1},500,function(){
            //     flag=true;
            // });
                    n=this.index  	
    		}
    	}
    }
//图片轮播结束
//手机二维码
var headleft=$("#head-left-a");
var headright=$("#head-right-b");
// console.log(headleft);
var head=$(".head-aa")[0];
var heads=$(".head-bb")[0];
headleft.onmousemove=function(){
    head.style.display="block"
}
headleft.onmouseout=function(){
    head.style.display="none"
}
head.onmousemove=function(){
    head.style.display="block"
}
head.onmouseout=function(){
    head.style.display="none"
}
headright.onmousemove=function(){
    heads.style.display="block"
}
headright.onmouseout=function(){
    heads.style.display="none"
}
heads.onmousemove=function(){
    heads.style.display="block"
}
heads.onmouseout=function(){
    heads.style.display="none"
}
//二级导航
var daohan=$(".daohan")[0];
var er=$(".daohan-a");
var xian=$(".daohan-ab");
for(var i=0;i<er.length;i++){
    er[i].index=i;
    //给一个循环，给一级标号
    er[i].onmouseover=function(){
  //给一级导航一个鼠标经过事件
      for(var j=0;j<er.length;j++){
  //给一个循环，让二级导航标号
        xian[j].style.display="none";
        xian[this.index].style.display="block"
      }
    }
    er[i].onmouseout=function(){
      for(var j=0;j<er.length;j++){
        xian[j].style.display="none";
      }
    }
}
//节点图片轮播
  var l=$(".lunbo")[0];
  var ul=$(".lunbo-aa")[0];      //获取页面中的相关元素
  var lis=$(".lunbo-a");
  var left1=$(".lunbo-div2")[0];
  var right1=$(".lunbo-div3")[0];
  var width1=parseInt(getStyle(lis[0],"width"));//获取宽度属性
    var r=setInterval(lun,3000);
    var flag=true;   //开关思想
    function lun(){
      if(!flag){
            return;
      }
      flag=false;
      var lif=getFirst(ul);     //获取第一个节点
      animate(ul,{left:-width1},300,function(){   //动画效果
                  ul.appendChild(lif);     //把第一个节点放到页面的最后，
                  ul.style.left=0;          //把大框往前一个图片的宽度
                   flag=true;
      })                                        //回调函数
    }
    // function move1(){
    //   if(!flag){
    //         return;
    //   }
    //   flag=false;
    //   var lif=getFirst(ul); //获取第一个节点
    //   var lil=getLast(ul);  //获取最后一个节点
    //   insertBefore(lil,lif);  //把最后一个节点放在第一个节点之前
    //   ul.style.left=-width+"px";//整个框移动
    //   animate(ul,{left:0},300,function(){
    //     flag=true;
    //   });   //动画效果
                                     
    // }
    l.onmouseover=function(){  //鼠标效果
            clearInterval(t);
    }
   l.onmouseout=function(){
             t=window.setInterval(move,3000);
    }
    left1.onclick=function(){        //右点击事件         
            lun();
    }
    right1.onclick=function(){
            lun();
    }
});