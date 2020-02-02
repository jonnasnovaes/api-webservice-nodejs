//EXPORTA VÁRIAS FUNÇÕES AO MESMO TEMPO
module.exports = {

    //FUNÇÃO QUE RETORNA A DATA JÁ FORMATADA
    data() {
        let objDate = new Date();

        let dia = objDate.getDate();
        let mes = objDate.getMonth() + 1;
        let ano = objDate.getFullYear();

        let data = dia + "/" + mes + "/" + ano;

        return data;
    },

    //FUNÇÃO QUE RETORNA A HORA JÁ FORMATADA
    hora() {
        let objDate = new Date();

        let hora = objDate.getHours();
        let min = objDate.getMinutes();
        //let seg = objDate.getSeconds();

        hora = hora + ":" + min; // + ":" + seg;

        return hora;
    }
}