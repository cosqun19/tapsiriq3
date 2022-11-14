const form = document.querySelector('form'); 
const sendBtn = document.querySelector('#send'); 
const historyBtn = document.querySelector('#date'); 
const history = document.querySelector('.history') 
class Message { 
    constructor(author, text) { 
        this.author = author; 
        this.sendTime = this.gettime(); 
        this.text = text; 
    } 
    gettime() { 
        let now = new Date(); 
        return ${now.getHours()}:${now.getMinutes()} 
    } 
    toHtml() { 
        return <p>${this.sendTime} ${this.author}: ${this.text}</p><br/>; 
    } 
} 
class Messenger { 
    messages = [] 
    show_history = () => { 
        history.innerHTML = ''; 
        console.log(this.messages); 
        this.messages.map(v => { 
            const p = document.createElement('p'); 
            p.innerHTML = v.toHtml(); 
            history.append(p) 
        }); 
    } 
    send = (author, text) => { 
        const message = new Message(author, text); 
        this.messages.push(message); 
    } 
} 
 
const messenger = new Messenger() 
 
sendBtn.addEventListener('click', (e) => { 
    e.preventDefault(); 
    const formData = new FormData(form); 
    messenger.send(String(formData.get('author')), String(formData.get('text'))); 
    document.querySelector('#area').value = ''; 
}); 
 
historyBtn.addEventListener('click', (e) => { 
    e.preventDefault(); 
    messenger.show_history(); 
});