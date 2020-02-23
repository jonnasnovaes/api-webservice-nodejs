var objDate = new Date();

var dia = objDate.getDate();
var mes = objDate.getMonth() + 1;
var ano = objDate.getFullYear();
var hora = objDate.getHours();
var min = objDate.getMinutes();

//EXPORTA VÁRIAS FUNÇÕES AO MESMO TEMPO
module.exports = {

    //FUNÇÃO QUE RETORNA A DATA JÁ FORMATADA
    data() {

        let data = dia + "/" + mes + "/" + ano;
        return data;
    },

    //FUNÇÃO QUE RETORNA A HORA JÁ FORMATADA
    hora() {

        let time = hora + ":" + min; // + ":" + seg;
        return time;
    },

    nomeLog() {

        let nome = ano.toString() + mes.toString() + dia.toString() + hora.toString() + min.toString();
        return nome;

    }
}