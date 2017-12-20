function produtos(){
	var produto = [
	{"nome":"Applique", "chamativo": "Faça você mesmo. <br>Tenha autonomia <br>na hora de criar.", "botao": "Conheça o Applique", "img": "backgrounds/elearning_home_applique.png", "logo": "logos/elearning_applique_logo.png"}
	{"nome":"Smart", "chamativo": "Nós fazemos <br>no Applique <br>para você editar.", "botao": "Conheça o Smart", "img": "backgrounds/elearning_home_smart.png", "logo": "logos/elearning_smart_logo.png"}
	{"nome":"Studio", "chamativo": "Nós fazemos <br>projetos sob medida <br>para você.", "botao": "Conheça o Studio", "img": "backgrounds/elearning_home_studio.png", "logo": "logos/elearning_icon_studio.png"}
	{"nome":"Class", "chamativo": "Cursos de prateleira <br>prontinhos para <br>sua plataforma.", "botao": "Conheça o Class", "img": "backgrounds/Site_Class_Home.png", "logo": "logos/elearning_class_logo.png"}
	]

	var template = "{{#produto}}<div class=\"produtos col-lg-3 col-md-6 col-sm-12\" style=\"background-image: url({{img}});\"><img src=\"{{logo}}\" class=\"logoProduto\"><h2 class=\"nomeProdutos\">{{nome}}</h2><p class=\"chamativo\">{{chamativo}}</p><button class=\"bt\">{{botao}}{{/produto}}</button></div>"
	var html = Mustache.to_html(template,produto);
	$('#teste').html(html)
}
