// window.onload = function () {

//     setTimeout200(function () {

//         document.body.classList.add('loaded')

//         Draggable.create('.gallery', {
//             bounds: 'body',
//             inertia: true
//         })

//     })
// }

window.onload = function() { // После того, как окно загружено
 
	setTimeout(function() { // Устанавливаем таймаут на 200мс
 
		document.body.classList.add('loaded') // Добавляем класс готовности body
 
		if (window.matchMedia('(min-width: 992px)').matches) { // Если не смартфон
 
			Draggable.create('.gallery', { // Запускаем плагин Draggable
				bounds: 'body',
				inertia: true
			})
			
		}
 
	}, 750)
 
}