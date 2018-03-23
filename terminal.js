/***
 *** Mac Terminal Style Resume
 *** Created By Website Dev Team
 *** http://websitedevteam.com
 *** February 20, 2018
 ***/


var i=0;

function command(input_cmd) {
	if(input_cmd == 'sudo' || input_cmd == 'su') {
    	var div = document.createElement("DIV");
		var br = document.createElement("BR");
      	var div1 = document.createTextNode("su: Sorry");
		var div2 = document.createTextNode("Input \"help\" for help.");
      	div.appendChild(div1);
		div.appendChild(br);
		div.appendChild(div2);
		document.body.appendChild(div);
		div.setAttribute("style", "margin-left: 10px;");

		input_line(i);
		i++;
	}
	else if(input_cmd == 'date' || input_cmd == 'time') {
    	window.close();

		input_line(i);
		i++;
	}

	else if(input_cmd == 'help' || input_cmd == 'Help') {
    	var div = document.createElement("DIV");
		var br1 = document.createElement("BR");
		var br2 = document.createElement("BR");
		var br3 = document.createElement("BR");
      	var div1 = document.createTextNode("Input \"who\"  >  About Website Dev Team");
		var div2 = document.createTextNode("Input \"ls\"  >  Display Project Lists");
		var div3 = document.createTextNode("Input \"cat project name\"  >  About The Project");
		var div4 = document.createTextNode("Input \"open project name\"  >  Open The Project");
      	div.appendChild(div1);
		div.appendChild(br1);
		div.appendChild(div2);
		div.appendChild(br2);
		div.appendChild(div3);
		div.appendChild(br3);
		div.appendChild(div4);
		document.body.appendChild(div);
		div.setAttribute("style", "margin-left: 10px;");

		input_line(i);
		i++;
	}
	else if(input_cmd == 'who') {
		var div = document.createElement("DIV");
		var br1 = document.createElement("BR");
		var br2 = document.createElement("BR");
		var a1 = document.createElement("A");
		var a2 = document.createElement("A");
		var a3 = document.createElement("A");
		var div1 = document.createTextNode("Name:     KwanSeok Seo");
		var div2 = document.createTextNode("Email:   info@websitedevteam.com");
		var web1 = document.createTextNode("Website: http://websitedevteam.com ");
		var web2 = document.createTextNode("");
		var web3 = document.createTextNode("");
		var help = document.createTextNode("Input \"help\" for help, \"ls\" for project list");
		var br3 = document.createElement("BR");
		var br4 = document.createElement("BR");
		var br5 = document.createElement("BR");
		var br6 = document.createElement("BR");

		div.appendChild(div1);
		div.setAttribute("style", "text-decoration:none; color: #fff; margin-left: 10px;");
		div.appendChild(br1);
		div.appendChild(div2);
		//div.appendChild(br2);
		a1.appendChild(div2);
		a1.setAttribute("href", "mailto:info@websitedevteam.com");
		a1.setAttribute("style", "text-decoration:none; color: #fff;");
		div.appendChild(a1);
		div.appendChild(br5);
		a2.appendChild(web1);
		a2.setAttribute("href", "http://websitedevteam.com");
		a2.setAttribute("target", "_blank");
		a2.setAttribute("style", "text-decoration:none; color: #fff;");
		div.appendChild(a2);
		a3.appendChild(web2);
		a3.setAttribute("href", "");
		a3.setAttribute("style", "text-decoration:none; color: #fff;");
		div.appendChild(a3);
		div.appendChild(br3);
		div.appendChild(br4);
		div.appendChild(help);
		document.body.appendChild(div);

		input_line(i);
		i++;
	}
	else if(input_cmd == 'clear') {
    	window.location.reload(true);

		input_line(i);
		i++;
	}
	else if(input_cmd == 'ls') {
		var br = document.createElement("BR");
		var div = document.createElement("DIV");
		var a1 = document.createElement("A");
		var a2 = document.createElement("A");
		var a3 = document.createElement("A");
		var a4 = document.createElement("A");
		var a5 = document.createElement("A");
		var a6 = document.createElement("A");
		var a7 = document.createElement("A");
		var a8 = document.createElement("A");
		var a9 = document.createElement("A");
		var a10 = document.createElement("A");
		var a11 = document.createElement("A");

		var div1 = document.createTextNode("ARKMUMC");
		var div2 = document.createTextNode("Bike Rack Brewing");
		var div3 = document.createTextNode("Green Pillow");
		var div4 = document.createTextNode("IBCD Woodwork");
		var div5 = document.createTextNode("NWACC");
		var div6 = document.createTextNode("Razorback Shop");
		var div7 = document.createTextNode("University Regalia System");
		var div8 = document.createTextNode("University Bookstore");
		var div9 = document.createTextNode("University Grad Wall");
		var div10 = document.createTextNode("Table Tennis Mount");
		var div11 = document.createTextNode("Website Dev Team");
		//var div12 = document.createTextNode("https://shop.uofastore.com");
		var divCat = document.createTextNode("Input \"cat project name\"  >  About The Project.");
		var divOpen = document.createTextNode("Input \"open project name\"  >  Open The Project.");
		div.setAttribute("style", "margin-left: 10px;");
		var br1 = document.createElement("BR");
		var br2 = document.createElement("BR");
		var br3 = document.createElement("BR");
		var br4= document.createElement("BR");
		var br5 = document.createElement("BR");
		var br6 = document.createElement("BR");


		a1.appendChild(div1);
		a1.setAttribute("href", "http://arkmumc.org");
		a1.setAttribute("target", "_blank");
		a1.setAttribute("style", "text-decoration:none; color: #fff; width: 33%; margin-right: 0%; display: inline-block; ");
		div.appendChild(a1);

		a2.appendChild(div2);
		a2.setAttribute("href", "http://bikerackbrewing.com");
		a2.setAttribute("target", "_blank");
		a2.setAttribute("style", "text-decoration:none; color: #fff; width: 33%; margin-right: 0%; display: inline-block; ");
		div.appendChild(a2);

		a3.appendChild(div3);
		a3.setAttribute("href", "http://greenpillow.org");
		a3.setAttribute("target", "_blank");
		a3.setAttribute("style", "text-decoration:none; color: #fff; width: 33%; margin-right: 0%; display: inline-block; ");
		div.appendChild(a3);

		div.appendChild(br1);

		a4.appendChild(div4);
		a4.setAttribute("href", "https://ibcdwoodwork.com");
		a4.setAttribute("target", "_blank");
		a4.setAttribute("style", "text-decoration:none; color: #fff; width: 33%; margin-right: 0%; display: inline-block; ");
		div.appendChild(a4);

		a5.appendChild(div5);
		a5.setAttribute("href", "http://nwacc.edu");
		a5.setAttribute("target", "_blank");
		a5.setAttribute("style", "text-decoration:none; color: #fff; width: 33%; margin-right: 0%; display: inline-block; ");
		div.appendChild(a5);

		a6.appendChild(div6);
		a6.setAttribute("href", "https://shop.uofastore.com");
		a6.setAttribute("target", "_blank");
		a6.setAttribute("style", "text-decoration:none; color: #fff; width: 33%; margin-right: 0%; display: inline-block; ");
		div.appendChild(a6);

		div.appendChild(br2);

		a7.appendChild(div7);
		a7.setAttribute("href", "http://www.uofastore.com/grad_salute/faculty/index.php");
		a7.setAttribute("target", "_blank");
		a7.setAttribute("style", "text-decoration:none; color: #fff; width: 33%; margin-right: 0%; display: inline-block; ");
		div.appendChild(a7);

		a8.appendChild(div8);
		a8.setAttribute("href", "http://uofastore.com");
		a8.setAttribute("target", "_blank");
		a8.setAttribute("style", "text-decoration:none; color: #fff; width: 33%; margin-right: 0%; display: inline-block; ");
		div.appendChild(a8);

		a9.appendChild(div9);
		a9.setAttribute("href", "http://websitedevteam.com/staging/gradwall/");
		a9.setAttribute("target", "_blank");
		a9.setAttribute("style", "text-decoration:none; color: #fff; width: 33%; margin-right: 0%; display: inline-block; ");
		div.appendChild(a9);

		div.appendChild(br3);

		a10.appendChild(div10);
		a10.setAttribute("href", "https://tabletennismount.com");
		a10.setAttribute("target", "_blank");
		a10.setAttribute("style", "text-decoration:none; color: #fff; width: 33%; margin-right: 0%; display: inline-block; ");
		div.appendChild(a10);

		a11.appendChild(div11);
		a11.setAttribute("href", "http://websitedevteam.com");
		a11.setAttribute("target", "_blank");
		a11.setAttribute("style", "text-decoration:none; color: #fff; width: 33%; margin-right: 0%; display: inline-block; ");
		div.appendChild(a11);

		div.appendChild(br4);
		div.appendChild(br5);
		div.appendChild(divCat);
		div.appendChild(br6);
		div.appendChild(divOpen);

		document.body.appendChild(div);

		input_line(i);
		i++;
	}
	else if(input_cmd == 'cat ARKMUMC' || input_cmd == 'cat arkmumc'|| input_cmd == 'cat Arkmumc') {
		var div = document.createElement("DIV");
		var addr = document.createElement("A");
		var client = document.createTextNode("Client - Arkansas Korean Mission United Methodist Church");
		var br1 = document.createElement("BR");
		var contact = document.createTextNode("Contact - arkmumc@gmail.com");
		var br2 = document.createElement("BR");
		var proj = document.createTextNode("Project Type - Website Design and Development and Logo and Banner Design");
		var br3 = document.createElement("BR");
		var url = document.createTextNode("URL - http://arkmumc.org");
		var br4 = document.createElement("BR");

		div.setAttribute("style", "margin-left: 20px;");
		div.appendChild(client);
		div.appendChild(br1);
		div.appendChild(contact);
		div.appendChild(br2);
		div.appendChild(proj);
		div.appendChild(br3);
		document.body.appendChild(div);

		addr.appendChild(url);
		addr.setAttribute("href", "http://arkmumc.org");
		addr.setAttribute("target", "_blank");
		addr.setAttribute("style", " color: #fff;");
		div.appendChild(addr);

		input_line(i);
		i++;
	}
	else if(input_cmd == 'open http://arkmumc.org' || input_cmd == 'open arkmumc.org' || input_cmd == 'open ARKMUMC' || input_cmd == 'open arkmumc'|| input_cmd == 'open Arkmumc') {
		window.open("https://arkmumc.org");

		input_line(i);
		i++;
	}
	else if(input_cmd == 'cat bike rack brewing' || input_cmd == 'cat Bike Rack Brewing') {
		var div = document.createElement("DIV");
		var addr = document.createElement("A");
		var client = document.createTextNode("Client - Bike Rack Brewing");
		var br1 = document.createElement("BR");
		var proj = document.createTextNode("Project Type - Website Design and Development and Product Photoshoot");
		var br2 = document.createElement("BR");
		var url = document.createTextNode("URL - http://bikerackbrewing.com");
		var br3 = document.createElement("BR");

		div.setAttribute("style", "margin-left: 20px;");
		div.appendChild(client);
		div.appendChild(br1);
		div.appendChild(proj);
		div.appendChild(br2);
		addr.appendChild(url);
		addr.setAttribute("href", "http://bikerackbrewing.com");
		addr.setAttribute("target", "_blank");
		addr.setAttribute("style", "text-decoration:none; color: #fff;");
		div.appendChild(addr);
		document.body.appendChild(div);

		input_line(i);
		i++;
	}
	else if(input_cmd == 'open bikerackbrewing.com' || input_cmd == 'open http://bikerackbrewing.com' || input_cmd == 'open bike rack brewing' || input_cmd == 'open Bike Rack Brewing') {
		window.open("http://bikerackbrewing.com");

		input_line(i);
		i++;
	}
	else if(input_cmd == 'cat green pillow' || input_cmd == 'cat Green Pillow') {
		var div = document.createElement("DIV");
		var addr = document.createElement("A");
		var client = document.createTextNode("Client - Green Pillow");
		var br1 = document.createElement("BR");
		var proj = document.createTextNode("Project Type - Website Design and Development");
		var br2 = document.createElement("BR");
		var url = document.createTextNode("URL - http://greenpillow.org");
		var br3 = document.createElement("BR");

		div.setAttribute("style", "margin-left: 20px;");
		div.appendChild(client);
		div.appendChild(br1);
		div.appendChild(proj);
		div.appendChild(br2);
		addr.appendChild(url);
		addr.setAttribute("href", "http://greenpillow.org");
		addr.setAttribute("target", "_blank");
		addr.setAttribute("style", "text-decoration:none; color: #fff;");
		div.appendChild(addr);
		document.body.appendChild(div);

		input_line(i);
		i++;
	}
	else if(input_cmd == 'open greenpillow.org' || input_cmd == 'open http://greenpillow.org' || input_cmd == 'open green pillow' || input_cmd == 'open Green Pillow') {
		window.open("http://greenpillow.org");

		input_line(i);
		i++;
	}
	else if(input_cmd == 'cat ibcd woodwork' || input_cmd == 'cat IBCD Woodwork') {
		var div = document.createElement("DIV");
		var addr = document.createElement("A");
		var client = document.createTextNode("Client - IBCD Woodwork");
		var br1 = document.createElement("BR");
		var proj = document.createTextNode("Project Type - Website Design and Development, Photoshoot, Digital Marketing ");
		var br2 = document.createElement("BR");
		var url = document.createTextNode("URL - https://ibcdwoodwork.com");
		var br3 = document.createElement("BR");

		div.setAttribute("style", "margin-left: 20px;");
		div.appendChild(client);
		div.appendChild(br1);
		div.appendChild(proj);
		div.appendChild(br2);
		addr.appendChild(url);
		addr.setAttribute("href", "https://ibcdwoodwork.com");
		addr.setAttribute("target", "_blank");
		addr.setAttribute("style", "text-decoration:none; color: #fff;");
		div.appendChild(addr);
		document.body.appendChild(div);

		input_line(i);
		i++;
	}
	else if(input_cmd == 'open ibcdwoodwork.com' || input_cmd == 'open https://ibcdwoodwork.com' || input_cmd == 'open ibcd woodwork' || input_cmd == 'open IBCD Woodwork') {
		window.open("https://ibcdwoodwork.com");

		input_line(i);
		i++;
	}
	else if(input_cmd == 'cat nwacc' || input_cmd == 'cat NWACC') {
		var div = document.createElement("DIV");
		var addr = document.createElement("A");
		var client = document.createTextNode("Client - Northwest Arkansas Community College");
		var br1 = document.createElement("BR");
		var proj = document.createTextNode("Project Type - Re-design Footer");
		var br2 = document.createElement("BR");
		var url = document.createTextNode("URL - http://nwacc.edu");
		var br3 = document.createElement("BR");

		div.setAttribute("style", "margin-left: 20px;");
		div.appendChild(client);
		div.appendChild(br1);
		div.appendChild(proj);
		div.appendChild(br2);
		addr.appendChild(url);
		addr.setAttribute("href", "http://nwacc.edu");
		addr.setAttribute("target", "_blank");
		addr.setAttribute("style", "text-decoration:none; color: #fff;");
		div.appendChild(addr);
		document.body.appendChild(div);

		input_line(i);
		i++;
	}
	else if(input_cmd == 'open nwacc.edu' || input_cmd == 'open http://nwacc.edu' || input_cmd == 'open nwacc' || input_cmd == 'open NWACC') {
		window.open("http://nwacc.edu");

		input_line(i);
		i++;
	}
	else if(input_cmd == 'cat razorback shop' || input_cmd == 'cat Razorback Shop') {
		var div = document.createElement("DIV");
		var addr = document.createElement("A");
		var client = document.createTextNode("Client - University of Arkansas Razorback Shop");
		var br1 = document.createElement("BR");
		var proj = document.createTextNode("Project Type - Website Design and Development and Digital Marketing");
		var br2 = document.createElement("BR");
		var url = document.createTextNode("URL - https://shop.uofastore.com");
		var br3 = document.createElement("BR");

		div.setAttribute("style", "margin-left: 20px;");
		div.appendChild(client);
		div.appendChild(br1);
		div.appendChild(proj);
		div.appendChild(br2);
		addr.appendChild(url);
		addr.setAttribute("href", "https://shop.uofastore.com");
		addr.setAttribute("target", "_blank");
		addr.setAttribute("style", "text-decoration:none; color: #fff;");
		div.appendChild(addr);
		document.body.appendChild(div);

		input_line(i);
		i++;
	}
	else if(input_cmd == 'open https://shop.uofastore.com' || input_cmd == 'open shop.uofastore.com' || input_cmd == 'open razorback shop' || input_cmd == 'open Razorback Shop') {
		window.open("https://shop.uofastore.com");

		input_line(i);
		i++;
	}
	else if(input_cmd == 'cat university regalia system' || input_cmd == 'cat regalia system' || input_cmd == 'cat University Regalia System') {
		var div = document.createElement("DIV");
		var addr = document.createElement("A");
		var client = document.createTextNode("Client - University of Arkansas");
		var br1 = document.createElement("BR");
		var proj = document.createTextNode("Project Type - Regalia Management Web App Design and Development");
		var br2 = document.createElement("BR");
		var url = document.createTextNode("URL - https://bookstore.uark.edu/graduate");
		var br3 = document.createElement("BR");

		div.setAttribute("style", "margin-left: 20px;");
		div.appendChild(client);
		div.appendChild(br1);
		div.appendChild(proj);
		div.appendChild(br2);
		addr.appendChild(url);
		addr.setAttribute("href", "http://www.uofastore.com/grad_salute/faculty/index.php");
		addr.setAttribute("target", "_blank");
		addr.setAttribute("style", "text-decoration:none; color: #fff;");
		div.appendChild(addr);
		document.body.appendChild(div);

		input_line(i);
		i++;
	}
	else if(input_cmd == 'open http://www.uofastore.com/grad_salute/faculty/index.php' || input_cmd == 'open uofastore.com/grad_salute/faculty/index.php' || input_cmd == 'open regalia system' || input_cmd == 'open University Regalia System') {
		window.open("http://www.uofastore.com/grad_salute/faculty/index.php");
	input_line(i);
		i++;
	}
	else if(input_cmd == 'cat University Bookstore' || input_cmd == 'cat university bookstore') {
		var div = document.createElement("DIV");
		var addr = document.createElement("A");
		var client = document.createTextNode("Client - University of Arkansas Bookstore");
		var br1 = document.createElement("BR");
		var proj = document.createTextNode("Project Type - Website Design and Development and Digital Marketing");
		var br2 = document.createElement("BR");
		var url = document.createTextNode("URL - https://bookstore.uark.edu/");
		var br3 = document.createElement("BR");

		div.setAttribute("style", "margin-left: 20px;");
		div.appendChild(client);
		div.appendChild(br1);
		div.appendChild(proj);
		div.appendChild(br2);
		addr.appendChild(url);
		addr.setAttribute("href", "http://www.uofastore.com/");
		addr.setAttribute("target", "_blank");
		addr.setAttribute("style", "text-decoration:none; color: #fff;");
		div.appendChild(addr);
		document.body.appendChild(div);

		input_line(i);
		i++;
	}
	else if(input_cmd == 'open http://uofastore.com' || input_cmd == 'open uofastore.com' || input_cmd == 'open University Bookstore' || input_cmd == 'open university bookstore') {
		window.open("http://uofastore.com");

		input_line(i);
		i++;
	}
	else if(input_cmd == 'cat University Grad Wall' || input_cmd == 'cat university grad wall') {
		var div = document.createElement("DIV");
		var addr = document.createElement("A");
		var client = document.createTextNode("Client - University of Arkansas Bookstore");
		var br1 = document.createElement("BR");
		var proj = document.createTextNode("Project Type - Interactive Digital Signage Design and Development");
		var br2 = document.createElement("BR");
		var url = document.createTextNode("URL - http://websitedevteam.com/staging/gradwall/");
		var br3 = document.createElement("BR");

		div.setAttribute("style", "margin-left: 20px;");
		div.appendChild(client);
		div.appendChild(br1);
		div.appendChild(proj);
		div.appendChild(br2);
		addr.appendChild(url);
		addr.setAttribute("href", "http://websitedevteam.com/staging/gradwall/");
		addr.setAttribute("target", "_blank");
		addr.setAttribute("style", "text-decoration:none; color: #fff;");
		div.appendChild(addr);
		document.body.appendChild(div);

		input_line(i);
		i++;
	}
	else if(input_cmd == 'open http://websitedevteam.com/staging/gradwall/' || input_cmd == 'open websitedevteam.com/staging/gradwall/' || input_cmd == 'open University Grad Wall' || input_cmd == 'open university grad wall') {
		window.open("http://websitedevteam.com/staging/gradwall/");

		input_line(i);
		i++;
	}
	else if(input_cmd == 'cat table tennis mount' || input_cmd == 'cat Table Tennis Mount') {
		var div = document.createElement("DIV");
		var addr = document.createElement("A");
		var client = document.createTextNode("Client - Table Tennis Mount");
		var br1 = document.createElement("BR");
		var proj = document.createTextNode("Project Type - Website Design and Development and Digital Marketing");
		var br2 = document.createElement("BR");
		var url = document.createTextNode("URL - https://tabletennismount.com");
		var br3 = document.createElement("BR");

		div.setAttribute("style", "margin-left: 20px;");
		div.appendChild(client);
		div.appendChild(br1);
		div.appendChild(proj);
		div.appendChild(br2);
		addr.appendChild(url);
		addr.setAttribute("href", "https://tabletennismount.com");
		addr.setAttribute("target", "_blank");
		addr.setAttribute("style", "text-decoration:none; color: #fff;");
		div.appendChild(addr);
		document.body.appendChild(div);

		input_line(i);
		i++;
	}
	else if(input_cmd == 'open https://tabletennismount.com' || input_cmd == 'open tabletennismount.com' || input_cmd == 'open table tennis mount' || input_cmd == 'open Table Tennis Mount') {
		window.open("https://tabletennismount.com");

		input_line(i);
		i++;
	}
	else if(input_cmd == 'cat website dev team' || input_cmd == 'cat Website Dev Team') {
		var div = document.createElement("DIV");
		var addr = document.createElement("A");
		var client = document.createTextNode("Client - Me!");
		var br1 = document.createElement("BR");
		var proj = document.createTextNode("Project Type - Put Right People On Right Project");
		var br2 = document.createElement("BR");
		var url = document.createTextNode("URL - http://websitedevteam.com");
		var br3 = document.createElement("BR");

		div.setAttribute("style", "margin-left: 20px;");
		div.appendChild(client);
		div.appendChild(br1);
		div.appendChild(proj);
		div.appendChild(br2);
		addr.appendChild(url);
		addr.setAttribute("href", "http://websitedevteam.com");
		addr.setAttribute("target", "_blank");
		addr.setAttribute("style", "text-decoration:none; color: #fff;");
		div.appendChild(addr);
		document.body.appendChild(div);

		input_line(i);
		i++;
	}
	else if(input_cmd == 'open http://websitedevteam.com' || input_cmd == 'open websitedevteam.com' || input_cmd == 'open website dev team' || input_cmd == 'open Website Dev Team') {
		window.open("http://websitedevteam.com");

		input_line(i);
		i++;
	}
	else if(input_cmd == 'cat ') {
		var div = document.createElement("DIV");
		var addr = document.createElement("A");
		var client = document.createTextNode("Client - ");
		var br1 = document.createElement("BR");
		var proj = document.createTextNode("Project Type - ");
		var br2 = document.createElement("BR");
		var url = document.createTextNode("URL - http://");
		var br3 = document.createElement("BR");

		div.setAttribute("style", "margin-left: 20px;");
		div.appendChild(client);
		div.appendChild(br1);
		div.appendChild(proj);
		div.appendChild(br2);
		addr.appendChild(url);
		addr.setAttribute("href", "");
		addr.setAttribute("target", "_blank");
		addr.setAttribute("style", "text-decoration:none; color: #fff;");
		div.appendChild(addr);
		document.body.appendChild(div);

		input_line(i);
		i++;
	}
  	else {
		var div = document.createElement("DIV");
		var div1 = document.createTextNode("-bash: ");
		var div2 = document.createTextNode(input_cmd);
		var div3 = document.createTextNode(": command not found");

		div.setAttribute("style", "margin-left: 20px;");
		div.appendChild(div1);
		div.appendChild(div2);
		div.appendChild(div3);
		document.body.appendChild(div);
		input_line(i);
		i++;
	}
}

function input_line(i) {
	var j = i-1;

	var i_cmd = "cmd"+i;
	var ent = 'if(event.keyCode == 13)command(this.value);';

	var j_cmd = "cmd"+ j;
	var ent2 = "input[name="+j_cmd+"]";

	if(i==0) {
	$('input[name=cmd]').attr("disabled",true).attr("readonly",false);
	}
	$(ent2).attr("disabled",true).attr("readonly",false);

	var span = document.createElement("SPAN");
	var spanText = document.createTextNode(" kseo-MBP:~ kseo$");
	span.setAttribute("style", "color: #28FE14; margin-left: 10px; padding-right: 10px;");
	span.setAttribute("id", "wdt-input");
	span.appendChild(spanText);
	document.body.appendChild(span);

	var input = document.createElement("INPUT");
	input.setAttribute("type", "text");
	input.setAttribute("id", i_cmd);
	input.setAttribute("name", i_cmd);

	input.setAttribute("size", "40");
	input.setAttribute("onkeydown", ent);
	document.body.appendChild(input).focus();

	var br = document.createElement("br");
	document.body.appendChild(br);
}
