Vue.config.devtools = true;

var app = new Vue ({
    el: '#app',
    data : {
        newMessage: '',
        messages: [],
        counter: 0,
        searchContactsText: '',
        day: dayjs().format('hh:mm:ss'),
        user: {
        name: 'Laura Dionisi',
        avatar: '_io',
        },

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],

            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        
       
    },

   

    methods: {

        activeContact: function(index) {
            this.counter = index;   
        },

        addMessage() {
            
             var user_msg = {
                 date: dayjs().format('DD MM YYYY hh:mm:ss'),
                 text: '',
                 status: 'sent'
             }
             var bot_msg = {
                date: dayjs().format('DD MM YYYY hh:mm:ss'),
                text: 'ok',
                status: 'recieved'
            }

            user_msg.text = this.newMessage;
            this.contacts[this.counter].messages.push(user_msg);
            
        setTimeout(() => {
            this.contacts[this.counter].messages.push(bot_msg);

           },1000);


            this.newMessage = '';
        },

        searchContacts() {
            let self = this; 
            this.contacts.forEach((element) => {
                if (element.name.toLowerCase().includes(self.searchContactsText.toLowerCase())) {
                    element.visible = true;
                }
                else {
                    element.visible = false;
                }
            });
        }
    },
     
})

