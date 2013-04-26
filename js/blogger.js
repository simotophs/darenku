	var OL_blogger = {

		setViewportHeight:function(vw){
			this.ht = $("#header").height();
			this.hb = $("#footer").height();
			this.h = document.documentElement.clientHeight;
			this.vh = this.h-this.ht-this.hb;
			if(vw)
				$(vw).css("height",this.vh+"px");
			else
				$("#viewport").css("height",this.vh+"px");
		},
		setItemsSize:function(){
			this.setViewportHeight();
			var itemH = Math.round((this.vh-50)/4);
			var itemW = Math.round(itemH*27/13);
			$(".column").css("width",itemW+10+"px");
			$(".column_x2").css("width",itemW*2+20+"px");
			$(".items").css({width:itemW+"px",height:itemH+"px"});
			$(".items_x2").css({width:itemW+"px",height:itemH+"px"});
			$(".items_x2_c").css("width",itemW+20+"px")
			$(".items_x2_i").css({width:itemW/2-5+"px",height:itemW/2-5+"px"})
			$(".items_x4").css({width:itemW+"px",height:itemW+"px"});
			$(".items_x8").css({width:itemW*2+10+"px",height:itemW+"px"});
			$(".u_column").css("width",itemW/1.5);
			$("#wall").css("width",$(".column").length*(itemW+10)+$(".column_x2").length*(itemW*2+20)+"px");
		},
		hSetItemsSize:function(){
			this.setViewportHeight();
			console.log(this.vh);
			var itemH = Math.round((this.vh-40)/3);
			// var itemW = Math.round(itemH*27/13);
			var itemW =itemH;
			$(".column").css("width",itemW+10+"px");
			$(".column_x2").css("width",itemW+20+"px");
			$(".items").css({width:itemW+"px",height:itemH+"px"});
			$(".items_x2").css({width:itemW+"px",height:itemH+"px"});
			$(".items_x2_c").css("width",itemW+20+"px")
			$(".u_c1").css({width:itemW+"px",height:itemH+"px"});
			$(".u_c2").css({width:itemW+"px",height:itemH+"px"});
			// $(".items_x2_i").css({width:itemW/2-5+"px",height:itemW/2-5+"px"})
			// $(".items_x2_i").css({width:itemW/2-5+"px",height:itemW/2-5+"px"})
			$(".items_x4").css({width:itemW+"px",height:itemW+"px"});
			$(".items_x8").css({width:itemW*2+10+"px",height:itemW+"px"});
			// $(".u_column").css("width",itemW/1.5);
			$(".u_c1").css("height",this.vh*0.3);
			$(".u_c2").css("height",this.vh*0.6);
			$("#wall").css("width",$(".column").length*(itemW+10)+$(".column_x2").length*(itemW*2+20)+"px");
		},
		setRow:function(n,r){
			/*
			n: line
			r: width/height
			*/   
			this.setViewportHeight();
			var n = n || 3;
			var r = r || 1;
			var itemH = Math.round((this.vh-(n+1)*10)/n);
			$(".column").css("width",itemH*r+10+"px");
			$(".items").css({width:itemH*r+"px",height:itemH+"px"});
			$("#wall").css("width",$(".column").length*(itemH*r+10)+"px");
		},
		setWallWidth:function(vw){
			this.setViewportHeight(vw);
			var itemW = $("#wall").children().width();
			$("#wall").css("width",$(".column").length*(itemW)+"px");
		}
		

	}
	