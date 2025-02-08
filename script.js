const container = document.querySelector('.container')
const inputElement = document.querySelector('.passcode-key')
const prompter = document.querySelector('.prompter')
let inputVal = ''

inputElement.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        inputVal = (e.target.value).toLowerCase();

        if (inputVal === 'corny' || inputVal === 'korny') {
            prompter.remove(); 
            
            const questionAsker = document.createElement('div');
            questionAsker.classList.add('question-asker');
                
            const question = document.createElement('p')
            question.classList.add('question')
            question.textContent = 'Will you be my Valentine?'
    
            const buttonsDiv = document.createElement('div')
            buttonsDiv.classList.add('buttons')
    
            const yesButton = document.createElement('button')
            yesButton.classList.add('yes-button')
            yesButton.textContent = 'YES ❤️'
    
            let noButton = document.createElement('button')
            noButton.classList.add('no-button')
            noButton.textContent = 'NO 💔'        
    
            buttonsDiv.append(yesButton, noButton)
    
            questionAsker.append(question, buttonsDiv)
    
            container.appendChild(questionAsker)

            yesButton.addEventListener('click', () => {
                // Clear existing content
                container.innerHTML = '';
            
                // Create hearts container
                const heartsContainer = document.createElement('div');
                heartsContainer.classList.add('hearts-container');

                // Add multiple hearts
                for (let i = 0; i < 10; i++) { // Create 10 hearts for the effect
                    const heart = document.createElement('div');
                    heart.classList.add('heart');
                    heartsContainer.appendChild(heart);
                }

                // Append hearts to container
                container.appendChild(heartsContainer);

                // After 2 seconds, remove hearts and play the video
                setTimeout(() => {
                    heartsContainer.remove(); // Remove hearts animation
            
                    // Create a video container
                    const videoContainer = document.createElement('div');
                    videoContainer.classList.add('video-container');

                    // Embed the YouTube video
                    videoContainer.innerHTML = `
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/Ly85du4fmZY?autoplay=1&rel=0" 
                        frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
                    </iframe>`;

                    container.appendChild(videoContainer);
                }, 2000); // 3-second delay for fireworks
            });

            let noClickCount = 0; // Track how many times "No" is clicked

            noButton.addEventListener("click", () => {
                noClickCount++;

                if (noClickCount === 1) {
                    alert("You must have accidentally pressed No. Try again.");
                } 
                else if (noClickCount === 2) {
                    alert("You must have sneezed. Try again.");
                    
                    // Flip Yes and No button positions
                    buttonsDiv.insertBefore(noButton, yesButton);
                } 
                else if (noClickCount === 3) {
                    // Change both buttons to "YES ❤️"
                    noButton = yesButton;
                }
            });


        }
        else {
            alert("Wrong Name! Think Again!!")
            inputElement.value = ''
        }



    }
})

