let zoomLevel = 100

function zoomIn(){
    zoomLevel += 10
    document.body.style.zoom = `${zoomLevel}%`;
}

function zoomOut(){
    zoomLevel -= 10
    document.body.style.zoom = `${zoomLevel}%`;
}

function zoomReset(){
    zoomLevel = 100
    document.body.style.zoom = `${zoomLevel}%`;
}

function error(){
    Swal.fire({
        title: 'عذرا !',
        text: 'هذه الميزة غير متاحة حاليا',
        icon: 'error',
        confirmButtonText: 'حسنا'
      })
}