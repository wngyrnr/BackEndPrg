document.querySelectorAll('.image-placeholder input[type="file"]').forEach((input, index) => {
    input.addEventListener('change', function(event) {
        const placeholder = document.getElementById(`image-placeholder-${index + 1}`);
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                placeholder.innerHTML = `<img src="${e.target.result}" alt="업로드된 이미지">`;
            };

            reader.readAsDataURL(file);
        }
    });
});
