// JavaScript Document
//数组map方法补丁
Array.prototype.map=function(callback)
{
    var a= 0,
        len=this.length,
        result=[];
    while(a<len)
    {
        result.push(callback(this[a],a++,this));
    }
    return result;
}
//封装banner插件
function createBanner(option)
{
    var element=document.getElementById(option.element),
        data=option.data,
        dataLen=data.length,
        fragment=document.createDocumentFragment(),
        c=btn.getElementsByTagName("a"),
        a=0;
    function createImage(option)
    {
        var a=document.createElement("a");
        a.href=option.href;
        a.style.backgroundImage="url("+option.url+")";
        return a;
    };
    var images=data.map(function(item) {
        return fragment.appendChild(createImage(item))
    });
    images[a].className="current";
    c[a].className="current1";
    var loop = function(){
        var _a= a;
        a=a>=dataLen-1?0:a+1;
        images[_a].className=null;
        c[_a].className=null;
        c[a].className="current1";
        images[a].className="current";
    };
    var loopTime = setInterval(loop,3000);
    element.onmousemove=function(optiion)
    {
        clearInterval(loopTime);
        var i = 0;
        while(i< c.length)//5
        {
            c[i].index = i;
            c[i].onmousemove=function()
            {
                for(var x=0;x< c.length;x++)
                {
                    c[x].className=null;
                    images[x].className=null;
                };
                this.className="current1";
                images[this.index].className="current"
                a=this.index;
            };
            i++;
        }
    };
    element.onmouseout = function(){
        loopTime = setInterval(loop,3000);
    };
    element.appendChild(fragment);
}
var data=
[
    {
        href:"",
        url:"images/banner1.jpg"
    },
    {
        href:"",
        url:"images/banner2.jpg"
    },
    {
        href:"",
        url:"images/banner3.jpg"
    },
    {
        href:"",
        url:"images/banner4.jpg"
    },
    {
        href:"",
        url:"images/banner5.jpg"
    }
];
createBanner(
    {
        element:"banner",
        data:data
    }
);
function createBanner1(option)
{
    var element=document.getElementById(option.Element),
        data=option.data1,
        a= 0,
        fragment=document.createDocumentFragment(),
        dataLen=data.length;
    function createImages(option)
    {
        var a=document.createElement("span");
            a.href=option.ImgHref;
            a.className="Img";
        a.style.backgroundImage="url("+option.ImgUrl+")";
        return a;
    };
    function createNavBtn(option)
    {
        var a=document.createElement("a");
            a.href=option.NavHref;
            a.className="TopNav";
            a.innerText=option.text;
            a.style.left=option.left;
        return a;
    }
    data.forEach(function(item)
    {
        fragment.appendChild(createImages(item));
        element.appendChild(createNavBtn(item));
    });
    element.appendChild(fragment);
    var TopNav=element.getElementsByTagName("a"),
        Images=element.getElementsByTagName("span");
        TopNav[a].className="current";
        Images[a].className="current1";
    var loop=function()
    {
        var _a= a;
        a=(a>=dataLen-1)?0:a+1;
        TopNav[_a].className=null;
        Images[_a].className=null;
        TopNav[a].className="current";
        Images[a].className="current1";
    };
    var looptime=setInterval(loop,3000);
    element.onmousemove=function(option)
    {
        clearInterval(looptime);
        var x=0;
        while(x<dataLen)
        {
            TopNav[x].index=x;
            TopNav[x].onmousemove=function()
            {
                for(var i=0;i<dataLen;i++)
                {
                    TopNav[i].className=null;
                    Images[i].className=null;
                };
                this.className="current";
                Images[this.index].className="current1";
                a=this.index;
            };
            x++;
        }
    };
    element.onmouseout=function(option)
    {
        looptime=setInterval(loop,3000)
    }
};
var data1=
[
    {
        ImgHref:"",
        NavHref:"",
        text:"等级提升",
        left:"0px",
        ImgUrl:"images/tu19.jpg",
    },
    {
        ImgHref:"",
        NavHref:"",
        text:"地图拓展",
        left:"115.4px",
        ImgUrl:"images/tu20.jpg",
    },
    {
        ImgHref:"",
        NavHref:"",
        text:"冒险升级",
        left:"230.8px",
        ImgUrl:"images/tu21.jpg",
    },
    {
        ImgHref:"",
        NavHref:"",
        text:"娱乐升级",
        left:"346.2px",
        ImgUrl:"images/tu22.jpg",
    },
    {
        ImgHref:"",
        NavHref:"",
        text:"自由百变",
        left:"461.6px",
        ImgUrl:"images/tu23.jpg",
    }
];
createBanner1
(
    {
        Element:"banner1",
        data1:data1
    }
)
var banner=document.getElementById("banner2"),
    banner2left=document.createElement("div");
banner.appendChild(banner2left);
banner.appendChild(banner2.getElementsByTagName("div")[0].cloneNode(0));
banner.appendChild(banner2.getElementsByTagName("div")[0].cloneNode(0));
banner2.getElementsByTagName("div")[0].className="left";
banner2.getElementsByTagName("div")[1].className="right";
banner2.getElementsByTagName("div")[2].className="clear";

//获取元素子节点然后筛选出来
//var a=document.getElementById("btn").childNodes;
//    i= 0,
//    c=[];
//    while(i< a.length)
//    {
//        if(a[i].nodeType===1)
//        {
//            c.push(a[i])
//        };
//        i++;
//    }