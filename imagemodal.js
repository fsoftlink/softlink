
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('view-image')) {
    showImageModal(e.target.src);
  }
});



function showImageModal(imageUrl) {
                // Remove existing modal if open
                const existing = document.querySelector('.image-modal-overlay');
                if (existing)
                    existing.remove();

                // Inject styles only once
                if (!document.getElementById('image-modal-style')) {
                    const style = document.createElement('style');
                    style.id = 'image-modal-style';
                    style.textContent = `
       .image-modal-overlay {
         position: fixed;
         top: 0; left: 0;
         width: 100%; height: 100%;
         background: rgba(0,0,0,0.8);
         display: flex;
         justify-content: center;
         align-items: center;
         z-index: 99999;
         animation: fadeInOverlay 0.3s ease-in-out;
       }

       .image-modal-content {
         position: relative;
         background: #fff;
         padding: 8px;
         border-radius: 8px;
         max-width: 90%;
         max-height: 90%;
         box-shadow: 0 0 15px rgba(0,0,0,0.3);
         animation: fadeInModal 0.4s ease-in-out;
       }

       .image-modal-content img {
         max-width: 100%;
         max-height: 80vh;
         border-radius: 5px;
       }

       .image-modal-close {
         position: absolute;
         top: 5px;
         right: 10px;
         font-size: 24px;
         font-weight: bold;
         color: #333;
         cursor: pointer;
       }

       @keyframes fadeInOverlay {
         from { opacity: 0; }
         to { opacity: 1; }
       }

       @keyframes fadeInModal {
         from { transform: scale(0.9); opacity: 0; }
         to { transform: scale(1); opacity: 1; }
       }
     `;
                    document.head.appendChild(style);
                }

                // Create overlay
                const overlay = document.createElement('div');
                overlay.className = 'image-modal-overlay';

                // Create modal box
                const modal = document.createElement('div');
                modal.className = 'image-modal-content';

                // Close button
                const closeBtn = document.createElement('span');
                closeBtn.className = 'image-modal-close';
                closeBtn.innerHTML = '&times;';
                closeBtn.onclick = () => overlay.remove();

                // Image
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = 'Preview';

                // Append
                modal.appendChild(closeBtn);
                modal.appendChild(img);
                overlay.appendChild(modal);
                document.body.appendChild(overlay);

                // Close on outside click
                overlay.addEventListener('click', function (e) {
                    if (!modal.contains(e.target)) {
                        overlay.remove();
                    }
                });
            }
