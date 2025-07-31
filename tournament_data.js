// Dados completos do torneio incluindo todos os dias
const tournamentData = {
    name: "TORNEIO 03 BRAVO PADEL",
    dates: [
        {
            date: "31/07/2025",
            courts: [
                {
                    id: "sicredi",
                    name: "QUADRA SICREDI",
                    matches: [
                        {
                            time: "18:40",
                            category: "6ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Everton Fracaro / Leonardo Flores",
                            team2: "Fabiano Bazen Coser / Jean Maciel",
                            id: "sicredi_1840_310725",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "19:20",
                            category: "6ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Matheus França / Vagner Recalcatti",
                            team2: "Thiago Becker Manfroi / Otto Berwig",
                            id: "sicredi_1920_310725",
                            odds: { team1: "2.10", team2: "1.80" }
                        },
                        {
                            time: "20:00",
                            category: "5ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Everton Fracaro / Leonardo Flores",
                            team2: "Julio Ranzi / Nilvo Boff",
                            id: "sicredi_2000_310725",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "20:40",
                            category: "6ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Samantha Jacomel / Bruna Thibes",
                            team2: "Danielle Callai Pelozatto / Stephanie Mantovani Tre",
                            id: "sicredi_2040_310725",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "21:20",
                            category: "6ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Thiago Becker Manfroi / Otto Berwig",
                            team2: "Thainá Horn Di Domênico / Ariane Brunetto",
                            id: "sicredi_2120_310725",
                            odds: { team1: "1.95", team2: "1.90" }
                        },
                        {
                            time: "22:00",
                            category: "5ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Everton Fracaro / Leonardo Flores",
                            team2: "Miguel Ângelo Comarú Júnior / Matheus S Comarú",
                            id: "sicredi_2200_310725",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "22:40",
                            category: "6ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Lizy Busck / Letícia Wazny Silveira Alvares",
                            team2: "Ana Berwig Freitag / Ana Paula Durli",
                            id: "sicredi_2240_310725",
                            odds: { team1: "2.00", team2: "1.85" }
                        }
                    ]
                },
                {
                    id: "super_lucas",
                    name: "QUADRA SUPER LUCAS",
                    matches: [
                        {
                            time: "18:00",
                            category: "Iniciantes Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "João Alessio Bugança / Dennis Ko Freitag",
                            team2: "Jose Galafassi / Cleberson Muniz",
                            id: "super_lucas_1800_310725",
                            odds: { team1: "1.70", team2: "2.25" }
                        },
                        {
                            time: "18:40",
                            category: "6ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Maria Clara Gonçalves / Debora Ventura",
                            team2: "Danielle Callai Pelozatto / Stephanie Mantovani Tre",
                            id: "super_lucas_1840_310725",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "19:20",
                            category: "6ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Adao Sousa Junior / Dheanes Bach da Silva",
                            team2: "Maikon Pedroso / Bruno Nirino",
                            id: "super_lucas_1920_310725",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "20:00",
                            category: "5ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Thalyse Flesch / Gizeli Pedroso",
                            team2: "Maria Clara Gonçalves / Ana Paula Sehn da Silva",
                            id: "super_lucas_2000_310725",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "20:40",
                            category: "5ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Karine de Lorenzi Corrêa / Letícia Wazny Silveira Alvares",
                            team2: "Bianca Nowasky Ferracini / Claudia Maria Schaly",
                            id: "super_lucas_2040_310725",
                            odds: { team1: "2.10", team2: "1.80" }
                        },
                        {
                            time: "22:00",
                            category: "Iniciantes Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Heidy Spohn Comarú / Suellen Sarmento Seberino",
                            team2: "Isabela Zancanaro / Jordana Zanquetta",
                            id: "super_lucas_2200_310725",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "23:20",
                            category: "6ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Matheus França / Vagner Recalcatti",
                            team2: "Thainá Horn Di Domênico / Ariane Brunetto",
                            id: "super_lucas_2320_310725",
                            odds: { team1: "1.90", team2: "1.95" }
                        }
                    ]
                },
                {
                    id: "cdc_concretos",
                    name: "QUADRA CDC CONCRETOS",
                    matches: [
                        {
                            time: "18:40",
                            category: "5ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Ana Berwig Freitag / Ana Paula Durli",
                            team2: "Bianca Nowasky Ferracini / Claudia Maria Schaly",
                            id: "cdc_concretos_1840_310725",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "19:20",
                            category: "5ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Anderson Ricardo Salgado / Leandro Kunen",
                            team2: "Bryan Schunke / Leandro Schunke",
                            id: "cdc_concretos_1920_310725",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "20:00",
                            category: "Iniciantes Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Roberta Sampaio / Rúbia Dall Alba",
                            team2: "Isabela Zancanaro / Jordana Zanquetta",
                            id: "cdc_concretos_2000_310725",
                            odds: { team1: "1.95", team2: "1.90" }
                        },
                        {
                            time: "20:40",
                            category: "2ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Alexis Nuñes / Murilo Sonda Paniz",
                            team2: "Eduardo de Vargas / Tailan Vargas",
                            id: "cdc_concretos_2040_310725",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "21:20",
                            category: "Iniciantes Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Matheus França / Vagner Recalcatti",
                            team2: "Jean Vezaro / Igor Andonini",
                            id: "cdc_concretos_2120_310725",
                            odds: { team1: "1.70", team2: "2.25" }
                        },
                        {
                            time: "22:00",
                            category: "4ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Julio César V. Branco / Renan Stank",
                            team2: "Rubens Cristiano Pelozatto / Guilherme Casagrande",
                            id: "cdc_concretos_2200_310725",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "22:40",
                            category: "6ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Samantha Jacomel / Bruna Thibes",
                            team2: "Maria Clara Gonçalves / Debora Ventura",
                            id: "cdc_concretos_2240_310725",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "23:20",
                            category: "5ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Marcos Vinicius Weirich / Murillo Klein",
                            team2: "João Di Domenico / Carlos Eduardo Fagundes",
                            id: "cdc_concretos_2320_310725",
                            odds: { team1: "1.90", team2: "1.95" }
                        }
                    ]
                }
            ]
        },
        {
            date: "01/08/2025",
            courts: [
                {
                    id: "sicredi",
                    name: "QUADRA SICREDI",
                    matches: [
                        {
                            time: "18:00",
                            category: "4ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Thiago Moraes / Vinícius Zancanaro Granzotto",
                            team2: "Guilherme da Cass Mecabô / Gabriel Mecabo",
                            id: "sicredi_1800_010825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "18:40",
                            category: "5ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Karine de Lorenzi Corrêa / Letícia Wazny Silveira Alvares",
                            team2: "Ana Berwig Freitag / Ana Paula Durli",
                            id: "sicredi_1840_010825",
                            odds: { team1: "2.10", team2: "1.80" }
                        },
                        {
                            time: "19:20",
                            category: "4ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "João Di Domenico / Carlos Eduardo Fagundes",
                            team2: "Jaco Rafael Stefanes da Silva / Pedro Ernesto Bebber",
                            id: "sicredi_1920_010825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "20:00",
                            category: "5ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Vinicius Scharnowski / Matheus Bruschi dos Santos",
                            team2: "Luiz Paulo Ramos / Patrick Ernane Moraes",
                            id: "sicredi_2000_010825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "20:40",
                            category: "5ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Erli Carvalho de Matos / Adenilson Brancaleoni",
                            team2: "Dionatan Antunes / Túlio Ko Freitag",
                            id: "sicredi_2040_010825",
                            odds: { team1: "1.95", team2: "1.90" }
                        },
                        {
                            time: "21:20",
                            category: "4ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Vinicius Scharnowski / Matheus Bruschi dos Santos",
                            team2: "Bryan Schunke / Jairo Brugnera",
                            id: "sicredi_2120_010825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "22:00",
                            category: "5ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Tiago Dorini / Guilherme Casagrande",
                            team2: "Luiz Paulo Ramos / Patrick Ernane Moraes",
                            id: "sicredi_2200_010825",
                            odds: { team1: "2.00", team2: "1.85" }
                        },
                        {
                            time: "22:40",
                            category: "5ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Leo Kunen / João E. Almeida",
                            team2: "Dionatan Antunes / Túlio Ko Freitag",
                            id: "sicredi_2240_010825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "23:20",
                            category: "Iniciantes Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Eloisa Clara Rietta / Camila Lopes de Abreu",
                            team2: "Eduarda Borba / Debora Ventura",
                            id: "sicredi_2320_010825",
                            odds: { team1: "2.20", team2: "1.75" }
                        }
                    ]
                },
                {
                    id: "super_lucas",
                    name: "QUADRA SUPER LUCAS",
                    matches: [
                        {
                            time: "18:00",
                            category: "6ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Adao Sousa Junior / Dheanes Bach da Silva",
                            team2: "Lucas Proner / Vitor Barreto",
                            id: "super_lucas_1800_010825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "18:40",
                            category: "Iniciantes Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Matheus França / Vagner Recalcatti",
                            team2: "Fabricio Coser / Fabiano Bazen Coser",
                            id: "super_lucas_1840_010825",
                            odds: { team1: "1.70", team2: "2.25" }
                        },
                        {
                            time: "20:00",
                            category: "3ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Luis Eduardo M. Cordova / Alyson Guadagnin",
                            team2: "Alexis Nuñes / Murilo Sonda Paniz",
                            id: "super_lucas_2000_010825",
                            odds: { team1: "1.95", team2: "1.90" }
                        },
                        {
                            time: "20:40",
                            category: "3ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Julio César V. Branco / Renan Stank",
                            team2: "Sergio Silveira Alvares / Maxi Zink",
                            id: "super_lucas_2040_010825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "21:20",
                            category: "4ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Marcos Vinicius Weirich / Murillo Klein",
                            team2: "Guilherme da Cass Mecabô / Gabriel Mecabo",
                            id: "super_lucas_2120_010825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "22:00",
                            category: "4ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "João Di Domenico / Carlos Eduardo Fagundes",
                            team2: "Adenilson Brancaleoni / Pedro Daniel Vieira Brancaleoni",
                            id: "super_lucas_2200_010825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "22:40",
                            category: "Iniciantes Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Juliano Assink / Diego Matias",
                            team2: "João Alessio Bugança / Dennis Ko Freitag",
                            id: "super_lucas_2240_010825",
                            odds: { team1: "2.10", team2: "1.80" }
                        },
                        {
                            time: "23:20",
                            category: "5ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Maria Clara Gonçalves / Ana Paula Sehn da Silva",
                            team2: "Ana Pinheiro / Maria Eduarda Boing",
                            id: "super_lucas_2320_010825",
                            odds: { team1: "1.85", team2: "2.00" }
                        }
                    ]
                },
                {
                    id: "cdc_concretos",
                    name: "QUADRA CDC CONCRETOS",
                    matches: [
                        {
                            time: "18:00",
                            category: "Iniciantes Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Ariane Carminatti / Lucimar Teske",
                            team2: "Eduarda Borba / Debora Ventura",
                            id: "cdc_concretos_1800_010825",
                            odds: { team1: "2.15", team2: "1.80" }
                        },
                        {
                            time: "18:40",
                            category: "Iniciantes Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Roberta Sampaio / Rúbia Dall Alba",
                            team2: "Heidy Spohn Comarú / Suellen Sarmento Seberino",
                            id: "cdc_concretos_1840_010825",
                            odds: { team1: "1.95", team2: "1.90" }
                        },
                        {
                            time: "19:20",
                            category: "4ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Marcos Vinicius Weirich / Murillo Klein",
                            team2: "Thiago Moraes / Vinícius Zancanaro Granzotto",
                            id: "cdc_concretos_1920_010825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "20:00",
                            category: "4ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Thainá Horn Di Domênico / Ariane Brunetto",
                            team2: "Ana Laura Carvalho / Danieli Dall Orsoleta",
                            id: "cdc_concretos_2000_010825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "20:40",
                            category: "6ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Rúbia Dall Alba / Heidy Spohn Comarú",
                            team2: "Francieli Schlager / Patricia Lisott",
                            id: "cdc_concretos_2040_010825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "21:20",
                            category: "Iniciantes Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Jean Vezaro / Igor Andonini",
                            team2: "Fabricio Coser / Fabiano Bazen Coser",
                            id: "cdc_concretos_2120_010825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "22:40",
                            category: "4ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Sergio Silveira Alvares / Luis Eduardo Cordova",
                            team2: "Bryan Schunke / Jairo Brugnera",
                            id: "cdc_concretos_2240_010825",
                            odds: { team1: "1.85", team2: "2.00" }
                        }
                    ]
                }
            ]
        },
        {
            date: "02/08/2025",
            courts: [
                {
                    id: "sicredi",
                    name: "QUADRA SICREDI",
                    matches: [
                        {
                            time: "08:00",
                            category: "4ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Miguel Ângelo Comarú Júnior / Matheus S Comarú",
                            team2: "Julio Ranzi / Nilvo Boff",
                            id: "sicredi_0800_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "08:40",
                            category: "4ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Adenilson Brancaleoni / Pedro Daniel Vieira Brancaleoni",
                            team2: "Jaco Rafael Stefanes da Silva / Pedro Ernesto Bebber",
                            id: "sicredi_0840_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "09:20",
                            category: "4ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Maxi Zink / Favyan Silva Da Rosa",
                            team2: "Leandro Bazzi / Maicon Fleck",
                            id: "sicredi_0920_020825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "10:00",
                            category: "3ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Alexis Nuñes / Murilo Sonda Paniz",
                            team2: "Rodrigo Beal / Mauri Rodrigues Junior",
                            id: "sicredi_1000_020825",
                            odds: { team1: "1.95", team2: "1.90" }
                        },
                        {
                            time: "10:40",
                            category: "3ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Julio César V. Branco / Renan Stank",
                            team2: "Jarbas Eduardo Vezaro / João Cordeiro",
                            id: "sicredi_1040_020825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "11:20",
                            category: "2ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Rafael Nicollil / Rodolpho Pedde Neto",
                            team2: "Rodrigo Beal / Mauri Rodrigues Junior",
                            id: "sicredi_1120_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "12:00",
                            category: "4ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Julio Ranzi / Nilvo Boff",
                            team2: "Tiago Vezaro / William José Battistella",
                            id: "sicredi_1200_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "12:40",
                            category: "2ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Rafael Nicollil / Rodolpho Pedde Neto",
                            team2: "Elton de Souza / João Cordeiro",
                            id: "sicredi_1240_020825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "13:20",
                            category: "2ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Eduardo de Vargas / Tailan Vargas",
                            team2: "Gustavo Silveira / Gustavo Santian",
                            id: "sicredi_1320_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "14:00",
                            category: "2ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Rodrigo Beal / Mauri Rodrigues Junior",
                            team2: "Elton de Souza / João Cordeiro",
                            id: "sicredi_1400_020825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "14:40",
                            category: "4ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Miguel Ângelo Comarú Júnior / Matheus S Comarú",
                            team2: "Tiago Vezaro / William José Battistella",
                            id: "sicredi_1440_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "15:20",
                            category: "3ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Gustavo Santian / Rodolpho Pedde Neto",
                            team2: "Eduardo de Vargas / Tailan Vargas",
                            id: "sicredi_1520_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "16:00",
                            category: "3ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Luis Eduardo M. Cordova / Alyson Guadagnin",
                            team2: "Rodrigo Beal / Mauri Rodrigues Junior",
                            id: "sicredi_1600_020825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "16:40",
                            category: "6ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Lucas Proner / Vitor Barreto",
                            team2: "Maikon Pedroso / Bruno Nirino",
                            id: "sicredi_1640_020825",
                            odds: { team1: "1.95", team2: "1.90" }
                        },
                        {
                            time: "17:20",
                            category: "2ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Alexis Nuñes / Murilo Sonda Paniz",
                            team2: "Gustavo Silveira / Gustavo Santian",
                            id: "sicredi_1720_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "18:00",
                            category: "3ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Sergio Silveira Alvares / Maxi Zink",
                            team2: "Jarbas Eduardo Vezaro / João Cordeiro",
                            id: "sicredi_1800_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "18:40",
                            category: "4ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Eduarda Carvalho / Jessica Cristofoli",
                            team2: "Alana Blasi Lemos / Emanuelle Mott Brasil",
                            id: "sicredi_1840_020825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "19:20",
                            category: "3ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Gustavo Santian / Rodolpho Pedde Neto",
                            team2: "Guilherme da Cass Mecabô / Gabriel Mecabo",
                            id: "sicredi_1920_020825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "20:00",
                            category: "4ª Mas. (Duplas)",
                            phase: "Oitavas",
                            team1: "1º Chave F",
                            team2: "2º Chave E",
                            id: "sicredi_2000_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "20:40",
                            category: "3ª Mas. (Duplas)",
                            phase: "Quartas",
                            team1: "2º Chave C",
                            team2: "2º Chave B",
                            id: "sicredi_2040_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "21:20",
                            category: "3ª Mas. (Duplas)",
                            phase: "Quartas",
                            team1: "1º Chave C",
                            team2: "2º Chave A",
                            id: "sicredi_2120_020825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "22:40",
                            category: "5ª Mas. (Duplas)",
                            phase: "Quartas",
                            team1: "1º Chave A",
                            team2: "Vencedor Jogo 1",
                            id: "sicredi_2240_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "23:20",
                            category: "6ª Mas. (Duplas)",
                            phase: "Oitavas",
                            team1: "2º Chave D",
                            team2: "2º Chave A",
                            id: "sicredi_2320_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        }
                    ]
                },
                {
                    id: "super_lucas",
                    name: "QUADRA SUPER LUCAS",
                    matches: [
                        {
                            time: "08:00",
                            category: "5ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Marina Lais da Silva Cominetti / Silvia Ap Vieira",
                            team2: "Ismênia Nowasky Beal / Vanessa Loss Testolin",
                            id: "super_lucas_0800_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "08:40",
                            category: "6ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Paula Cristina Pomorski / Maríndia Crestani Fagundes Perin",
                            team2: "Ana Berwig Freitag / Ana Paula Durli",
                            id: "super_lucas_0840_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "09:20",
                            category: "5ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Felipe Durigon / Bruno Capelari Vicentin Nirino",
                            team2: "Bryan Schunke / Leandro Schunke",
                            id: "super_lucas_0920_020825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "10:00",
                            category: "4ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Leticia Mineiro / Vanessa Muniz",
                            team2: "Ismênia Nowasky Beal / Vanessa Loss Testolin",
                            id: "super_lucas_1000_020825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "10:40",
                            category: "3ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Guilherme da Cass Mecabô / Gabriel Mecabo",
                            team2: "Eduardo de Vargas / Tailan Vargas",
                            id: "super_lucas_1040_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "11:20",
                            category: "5ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Marcos Vinicius Weirich / Murillo Klein",
                            team2: "Leandro Bazzi / Maicon Fleck",
                            id: "super_lucas_1120_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "12:00",
                            category: "5ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Danielle Callai Pelozatto / Stephanie Mantovani Tre",
                            team2: "Marina Lais da Silva Cominetti / Silvia Ap Vieira",
                            id: "super_lucas_1200_020825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "12:40",
                            category: "5ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Felipe Durigon / Bruno Capelari Vicentin Nirino",
                            team2: "Anderson Ricardo Salgado / Leandro Kunen",
                            id: "super_lucas_1240_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "13:20",
                            category: "5ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "João Di Domenico / Carlos Eduardo Fagundes",
                            team2: "Leandro Bazzi / Maicon Fleck",
                            id: "super_lucas_1320_020825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "14:00",
                            category: "5ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Danielle Callai Pelozatto / Stephanie Mantovani Tre",
                            team2: "Ismênia Nowasky Beal / Vanessa Loss Testolin",
                            id: "super_lucas_1400_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "14:40",
                            category: "5ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Tiago Dorini / Guilherme Casagrande",
                            team2: "Vinicius Scharnowski / Matheus Bruschi dos Santos",
                            id: "super_lucas_1440_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "15:20",
                            category: "Iniciantes Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Ariane Carminatti / Lucimar Teske",
                            team2: "Eloisa Clara Rietta / Camila Lopes de Abreu",
                            id: "super_lucas_1520_020825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "16:00",
                            category: "6ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Fabiano Bazen Coser / Jean Maciel",
                            team2: "Dionatan Antunes / Hiago Stanck",
                            id: "super_lucas_1600_020825",
                            odds: { team1: "1.95", team2: "1.90" }
                        },
                        {
                            time: "16:40",
                            category: "6ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Cleber Silva / Leonardo Kunen",
                            team2: "Leandro Schunke / Elaer Carvalho de Matos",
                            id: "super_lucas_1640_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "18:00",
                            category: "4ª Mas. (Duplas)",
                            phase: "Oitavas",
                            team1: "2º Chave B",
                            team2: "2º Chave C",
                            id: "super_lucas_1800_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "18:40",
                            category: "6ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Bruno Semin / Fernando Semin",
                            team2: "Alan de Souza / Matheus Antônio",
                            id: "super_lucas_1840_020825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "19:20",
                            category: "5ª Mas. (Duplas)",
                            phase: "Oitavas",
                            team1: "2º Chave D",
                            team2: "2º Chave A",
                            id: "super_lucas_1920_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "20:00",
                            category: "6ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Eduardo Leal Vidi / Felipe Durigon",
                            team2: "Juliano Assink / Diego Matias",
                            id: "super_lucas_2000_020825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "20:40",
                            category: "4ª Mas. (Duplas)",
                            phase: "Oitavas",
                            team1: "1º Chave E",
                            team2: "2º Chave F",
                            id: "super_lucas_2040_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "21:20",
                            category: "4ª Mas. (Duplas)",
                            phase: "Oitavas",
                            team1: "2º Chave D",
                            team2: "2º Chave A",
                            id: "super_lucas_2120_020825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "22:00",
                            category: "6ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Anderson Ricardo Salgado / Leandro Kunen",
                            team2: "Juliano Assink / Diego Matias",
                            id: "super_lucas_2200_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "22:40",
                            category: "5ª Mas. (Duplas)",
                            phase: "Quartas",
                            team1: "2º Chave E",
                            team2: "1º Chave D",
                            id: "super_lucas_2240_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "23:20",
                            category: "6ª Mas. (Duplas)",
                            phase: "Oitavas",
                            team1: "1º Chave E",
                            team2: "2º Chave F",
                            id: "super_lucas_2320_020825",
                            odds: { team1: "1.80", team2: "2.05" }
                        }
                    ]
                },
                {
                    id: "cdc_concretos",
                    name: "QUADRA CDC CONCRETOS",
                    matches: [
                        {
                            time: "08:00",
                            category: "6ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Alan de Souza / Matheus Antônio",
                            team2: "Leticia Mineiro / Vanessa Muniz",
                            id: "cdc_concretos_0800_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "08:40",
                            category: "6ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Everton Fracaro / Leonardo Flores",
                            team2: "Dionatan Antunes / Hiago Stanck",
                            id: "cdc_concretos_0840_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "09:20",
                            category: "6ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Rúbia Dall Alba / Heidy Spohn Comarú",
                            team2: "Caroline de Andrade / Cleide Bertocho",
                            id: "cdc_concretos_0920_020825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "10:40",
                            category: "5ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Miguel Ângelo Comarú Júnior / Matheus S Comarú",
                            team2: "Julio Ranzi / Nilvo Boff",
                            id: "cdc_concretos_1040_020825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "11:20",
                            category: "6ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Caroline de Andrade / Cleide Bertocho",
                            team2: "Francieli Schlager / Patricia Lisott",
                            id: "cdc_concretos_1120_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "12:00",
                            category: "6ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Lizy Busck / Letícia Wazny Silveira Alvares",
                            team2: "Paula Cristina Pomorski / Maríndia Crestani Fagundes Perin",
                            id: "cdc_concretos_1200_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "12:40",
                            category: "6ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Bruno Semin / Fernando Semin",
                            team2: "Leticia Mineiro / Vanessa Muniz",
                            id: "cdc_concretos_1240_020825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "13:20",
                            category: "5ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Leo Kunen / João E. Almeida",
                            team2: "Erli Carvalho de Matos / Adenilson Brancaleoni",
                            id: "cdc_concretos_1320_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "14:00",
                            category: "4ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Marina Lais da Silva Cominetti / Ana Carolyna Sampaio",
                            team2: "Thainá Horn Di Domênico / Ariane Brunetto",
                            id: "cdc_concretos_1400_020825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "14:40",
                            category: "6ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Eduardo Leal Vidi / Felipe Durigon",
                            team2: "Anderson Ricardo Salgado / Leandro Kunen",
                            id: "cdc_concretos_1440_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "15:20",
                            category: "5ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Thalyse Flesch / Gizeli Pedroso",
                            team2: "Ana Pinheiro / Maria Eduarda Boing",
                            id: "cdc_concretos_1520_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "16:00",
                            category: "4ª Fem. (Duplas)",
                            phase: "Grupos",
                            team1: "Marina Lais da Silva Cominetti / Ana Carolyna Sampaio",
                            team2: "Ana Laura Carvalho / Danieli Dall Orsoleta",
                            id: "cdc_concretos_1600_020825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "16:40",
                            category: "4ª Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Vinicius Scharnowski / Matheus Bruschi dos Santos",
                            team2: "Sergio Silveira Alvares / Luis Eduardo Cordova",
                            id: "cdc_concretos_1640_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "17:20",
                            category: "6ª Fem. (Duplas)",
                            phase: "Quartas",
                            team1: "1º Chave C",
                            team2: "2º Chave A",
                            id: "cdc_concretos_1720_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "18:00",
                            category: "6ª Fem. (Duplas)",
                            phase: "Quartas",
                            team1: "2º Chave C",
                            team2: "2º Chave B",
                            id: "cdc_concretos_1800_020825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "18:40",
                            category: "5ª Mas. (Duplas)",
                            phase: "Oitavas",
                            team1: "2º Chave B",
                            team2: "2º Chave C",
                            id: "cdc_concretos_1840_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "19:20",
                            category: "5ª Fem. (Duplas)",
                            phase: "Quartas",
                            team1: "2º Chave C",
                            team2: "2º Chave B",
                            id: "cdc_concretos_1920_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "20:00",
                            category: "5ª Fem. (Duplas)",
                            phase: "Quartas",
                            team1: "1º Chave C",
                            team2: "2º Chave A",
                            id: "cdc_concretos_2000_020825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "20:40",
                            category: "5ª Mas. (Duplas)",
                            phase: "Quartas",
                            team1: "1º Chave B",
                            team2: "Vencedor Jogo 2",
                            id: "cdc_concretos_2040_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "22:00",
                            category: "5ª Mas. (Duplas)",
                            phase: "Quartas",
                            team1: "1º Chave C",
                            team2: "1º Chave E",
                            id: "cdc_concretos_2200_020825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "22:40",
                            category: "6ª Mas. (Duplas)",
                            phase: "Oitavas",
                            team1: "2º Chave B",
                            team2: "2º Chave C",
                            id: "cdc_concretos_2240_020825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "23:20",
                            category: "6ª Mas. (Duplas)",
                            phase: "Oitavas",
                            team1: "1º Chave F",
                            team2: "2º Chave E",
                            id: "cdc_concretos_2320_020825",
                            odds: { team1: "1.85", team2: "2.00" }
                        }
                    ]
                }
            ]
        },
        {
            date: "03/08/2025",
            courts: [
                {
                    id: "sicredi",
                    name: "QUADRA SICREDI",
                    matches: [
                        {
                            time: "08:00",
                            category: "6ª Mas. (Duplas)",
                            phase: "Quartas",
                            team1: "1º Chave D",
                            team2: "Vencedor Jogo 2",
                            id: "sicredi_0800_030825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "08:40",
                            category: "6ª Mas. (Duplas)",
                            phase: "Quartas",
                            team1: "1º Chave A",
                            team2: "Vencedor Jogo 1",
                            id: "sicredi_0840_030825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "09:20",
                            category: "4ª Mas. (Duplas)",
                            phase: "Quartas",
                            team1: "1º Chave A",
                            team2: "Vencedor Jogo 1",
                            id: "sicredi_0920_030825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "10:00",
                            category: "4ª Mas. (Duplas)",
                            phase: "Quartas",
                            team1: "1º Chave D",
                            team2: "Vencedor Jogo 2",
                            id: "sicredi_1000_030825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "10:40",
                            category: "4ª Fem. (Duplas)",
                            phase: "Quartas",
                            team1: "1º Chave C",
                            team2: "2º Chave A",
                            id: "sicredi_1040_030825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "11:20",
                            category: "2ª Mas. (Duplas)",
                            phase: "Semifinal",
                            team1: "1º Chave A",
                            team2: "2º Chave B",
                            id: "sicredi_1120_030825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "12:00",
                            category: "2ª Mas. (Duplas)",
                            phase: "Semifinal",
                            team1: "2º Chave A",
                            team2: "1º Chave B",
                            id: "sicredi_1200_030825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "12:40",
                            category: "3ª Mas. (Duplas)",
                            phase: "Semifinal",
                            team1: "1º Chave A",
                            team2: "Vencedor Jogo 1",
                            id: "sicredi_1240_030825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "13:20",
                            category: "3ª Mas. (Duplas)",
                            phase: "Semifinal",
                            team1: "1º Chave B",
                            team2: "Vencedor Jogo 2",
                            id: "sicredi_1320_030825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "14:00",
                            category: "6ª Fem. (Duplas)",
                            phase: "Semifinal",
                            team1: "1º Chave B",
                            team2: "Vencedor Jogo 2",
                            id: "sicredi_1400_030825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "15:20",
                            category: "2ª Mas. (Duplas)",
                            phase: "Final",
                            team1: "Vencedor Jogo 1",
                            team2: "Vencedor Jogo 2",
                            id: "sicredi_1520_030825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "16:00",
                            category: "3ª Mas. (Duplas)",
                            phase: "Final",
                            team1: "Vencedor Jogo 3",
                            team2: "Vencedor Jogo 4",
                            id: "sicredi_1600_030825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "16:40",
                            category: "4ª Mas. (Duplas)",
                            phase: "Final",
                            team1: "Vencedor Jogo 9",
                            team2: "Vencedor Jogo 10",
                            id: "sicredi_1640_030825",
                            odds: { team1: "1.90", team2: "1.95" }
                        }
                    ]
                },
                {
                    id: "super_lucas",
                    name: "QUADRA SUPER LUCAS",
                    matches: [
                        {
                            time: "08:00",
                            category: "Iniciantes Mas. (Duplas)",
                            phase: "Grupos",
                            team1: "Juliano Assink / Diego Matias",
                            team2: "Jose Galafassi / Cleberson Muniz",
                            id: "super_lucas_0800_030825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "08:40",
                            category: "5ª Fem. (Duplas)",
                            phase: "Semifinal",
                            team1: "1º Chave A",
                            team2: "Vencedor Jogo 1",
                            id: "super_lucas_0840_030825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "09:20",
                            category: "4ª Mas. (Duplas)",
                            phase: "Quartas",
                            team1: "1º Chave C",
                            team2: "Vencedor Jogo 3",
                            id: "super_lucas_0920_030825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "10:00",
                            category: "4ª Mas. (Duplas)",
                            phase: "Quartas",
                            team1: "1º Chave B",
                            team2: "Vencedor Jogo 4",
                            id: "super_lucas_1000_030825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "10:40",
                            category: "5ª Fem. (Duplas)",
                            phase: "Semifinal",
                            team1: "1º Chave B",
                            team2: "Vencedor Jogo 2",
                            id: "super_lucas_1040_030825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "11:20",
                            category: "5ª Mas. (Duplas)",
                            phase: "Semifinal",
                            team1: "Vencedor Jogo 3",
                            team2: "Vencedor Jogo 4",
                            id: "super_lucas_1120_030825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "12:00",
                            category: "5ª Mas. (Duplas)",
                            phase: "Semifinal",
                            team1: "Vencedor Jogo 5",
                            team2: "Vencedor Jogo 6",
                            id: "super_lucas_1200_030825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "12:40",
                            category: "4ª Mas. (Duplas)",
                            phase: "Semifinal",
                            team1: "Vencedor Jogo 5",
                            team2: "Vencedor Jogo 6",
                            id: "super_lucas_1240_030825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "13:20",
                            category: "4ª Mas. (Duplas)",
                            phase: "Semifinal",
                            team1: "Vencedor Jogo 7",
                            team2: "Vencedor Jogo 8",
                            id: "super_lucas_1320_030825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "14:00",
                            category: "4ª Fem. (Duplas)",
                            phase: "Semifinal",
                            team1: "1º Chave A",
                            team2: "Vencedor Jogo 1",
                            id: "super_lucas_1400_030825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "14:40",
                            category: "6ª Fem. (Duplas)",
                            phase: "Semifinal",
                            team1: "1º Chave A",
                            team2: "Vencedor Jogo 1",
                            id: "super_lucas_1440_030825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "15:20",
                            category: "5ª Fem. (Duplas)",
                            phase: "Final",
                            team1: "Vencedor Jogo 3",
                            team2: "Vencedor Jogo 4",
                            id: "super_lucas_1520_030825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "16:00",
                            category: "5ª Mas. (Duplas)",
                            phase: "Final",
                            team1: "Vencedor Jogo 7",
                            team2: "Vencedor Jogo 8",
                            id: "super_lucas_1600_030825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "16:40",
                            category: "4ª Fem. (Duplas)",
                            phase: "Final",
                            team1: "Vencedor Jogo 3",
                            team2: "Vencedor Jogo 4",
                            id: "super_lucas_1640_030825",
                            odds: { team1: "1.80", team2: "2.05" }
                        }
                    ]
                },
                {
                    id: "cdc_concretos",
                    name: "QUADRA CDC CONCRETOS",
                    matches: [
                        {
                            time: "08:00",
                            category: "6ª Mas. (Duplas)",
                            phase: "Quartas",
                            team1: "1º Chave C",
                            team2: "Vencedor Jogo 3",
                            id: "cdc_concretos_0800_030825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "08:40",
                            category: "6ª Mas. (Duplas)",
                            phase: "Quartas",
                            team1: "1º Chave B",
                            team2: "Vencedor Jogo 4",
                            id: "cdc_concretos_0840_030825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "09:20",
                            category: "4ª Fem. (Duplas)",
                            phase: "Quartas",
                            team1: "2º Chave C",
                            team2: "2º Chave B",
                            id: "cdc_concretos_0920_030825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "10:00",
                            category: "Iniciantes Mas. (Duplas)",
                            phase: "Semifinal",
                            team1: "1º Chave A",
                            team2: "2º Chave B",
                            id: "cdc_concretos_1000_030825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "10:40",
                            category: "Iniciantes Mas. (Duplas)",
                            phase: "Semifinal",
                            team1: "2º Chave A",
                            team2: "1º Chave B",
                            id: "cdc_concretos_1040_030825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "11:20",
                            category: "Iniciantes Fem. (Duplas)",
                            phase: "Semifinal",
                            team1: "1º Chave A",
                            team2: "2º Chave B",
                            id: "cdc_concretos_1120_030825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "12:00",
                            category: "Iniciantes Fem. (Duplas)",
                            phase: "Semifinal",
                            team1: "2º Chave A",
                            team2: "1º Chave B",
                            id: "cdc_concretos_1200_030825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "12:40",
                            category: "6ª Mas. (Duplas)",
                            phase: "Semifinal",
                            team1: "Vencedor Jogo 5",
                            team2: "Vencedor Jogo 6",
                            id: "cdc_concretos_1240_030825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "13:20",
                            category: "6ª Mas. (Duplas)",
                            phase: "Semifinal",
                            team1: "Vencedor Jogo 7",
                            team2: "Vencedor Jogo 8",
                            id: "cdc_concretos_1320_030825",
                            odds: { team1: "1.75", team2: "2.15" }
                        },
                        {
                            time: "14:00",
                            category: "4ª Fem. (Duplas)",
                            phase: "Semifinal",
                            team1: "1º Chave B",
                            team2: "Vencedor Jogo 2",
                            id: "cdc_concretos_1400_030825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "15:20",
                            category: "Iniciantes Mas. (Duplas)",
                            phase: "Final",
                            team1: "Vencedor Jogo 1",
                            team2: "Vencedor Jogo 2",
                            id: "cdc_concretos_1520_030825",
                            odds: { team1: "1.80", team2: "2.05" }
                        },
                        {
                            time: "16:00",
                            category: "6ª Fem. (Duplas)",
                            phase: "Final",
                            team1: "Vencedor Jogo 3",
                            team2: "Vencedor Jogo 4",
                            id: "cdc_concretos_1600_030825",
                            odds: { team1: "1.85", team2: "2.00" }
                        },
                        {
                            time: "16:40",
                            category: "6ª Mas. (Duplas)",
                            phase: "Final",
                            team1: "Vencedor Jogo 9",
                            team2: "Vencedor Jogo 10",
                            id: "cdc_concretos_1640_030825",
                            odds: { team1: "1.90", team2: "1.95" }
                        },
                        {
                            time: "17:20",
                            category: "Iniciantes Fem. (Duplas)",
                            phase: "Final",
                            team1: "Vencedor Jogo 1",
                            team2: "Vencedor Jogo 2",
                            id: "cdc_concretos_1720_030825",
                            odds: { team1: "1.75", team2: "2.15" }
                        }
                    ]
                }
            ]
        }
    ],
    betOptions: [
        { id: "double_fault", name: "Dupla Falta", type: "event", description: "Alguém vai mandar no alambrado?" },
        { id: "glass_smash", name: "Smash no Vidro", type: "event", description: "Vai quebrar o vidro hoje?" },
        { id: "hit_opponent", name: "Acertar o Adversário", type: "event", description: "Vai rolar uma bolada no rival?" },
        { id: "complain_lighting", name: "Reclamar da Iluminação", type: "event", description: "Quem vai culpar a luz primeiro?" },
        { id: "point_steal", name: "Roubo de Ponto", type: "event", description: "Vai rolar aquela discussão?" },
        { id: "net_touch", name: "Tocar na Rede", type: "event", description: "Quem vai esbarrar na rede?" }
    ]
};

// Função para gerar odds especiais aleatórias
function generateSpecialOdds() {
    return {
        double_fault: (Math.random() * 1.5 + 2.5).toFixed(2),
        glass_smash: (Math.random() * 2 + 4).toFixed(2),
        hit_opponent: (Math.random() * 3 + 5).toFixed(2),
        complain_lighting: (Math.random() * 1.5 + 2).toFixed(2),
        point_steal: (Math.random() * 2 + 3).toFixed(2),
        net_touch: (Math.random() * 1.5 + 2.5).toFixed(2)
    };
}

// Adicionar odds especiais a todas as partidas
tournamentData.dates.forEach(date => {
    date.courts.forEach(court => {
        court.matches.forEach(match => {
            match.specialBets = generateSpecialOdds();
        });
    });
});

