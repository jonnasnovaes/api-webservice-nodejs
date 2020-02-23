const cli = require('cli-color');

module.exports = {

    status(msg, param){

        switch (param){
            case 'error':
                console.log(cli.red('\n\n' + msg + '\n'));
                break;
            case 'warn':
                console.log(cli.yellow('\n\n' + msg + '\n'));
                break;
            case 'success':
                console.log(cli.green('\n' + msg));
                break;
            case 'mensagem':
                console.log(cli.yellowBright(msg));
                break;
            case 'clear':
                console.log('\033[2J');
                break;
            case 'start':
                console.log(cli.cyan(msg + '\n'));
                break;
        }

    }

}