var menus = document.querySelectorAll('.tab-menu div');
var contents = document.querySelectorAll('.content div');


for(var menu of menus) {
    menu.addEventListener('click',function(){
        var active = document.querySelector('.active');
        console.log(active)
        active.classList.remove('active');
        this.classList.add('active');

      
        var index = this.getAttribute('data-index');
        console.log(index);

        for(var content of contents) {
            if(content.getAttribute('data-index') == index) {
                content.classList.remove('d-none')
            }
            else{
                content.classList.add('d-none');
            }
        }
    })
}