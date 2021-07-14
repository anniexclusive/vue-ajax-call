new Vue({
  el: '#app',

  data : {
    guest_name: '',
    phone : '',
    email : '',
    guests : []
  },

  methods: {

    onSubmit() {
      axios.post('/guests', {
        'guest_name' : this.guest_name,
        'phone' : this.phone,
        'email' : this.email
      }).then(response => this.guests = response.data);
    }
  },

  mounted() {
    axios.get('/guests').then(response => this.guests = response.data);
  }
});