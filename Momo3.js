let soldeInitial = 0 ;
let codeUssd ;
let menu;
let montantRecharger ;
let soldeRecharger ;
let montantRetirer;
let motDePasse ;
let nouveauMotDePasse ;
let code1 ;
let codeSaisi ;
let code2 ;



function lancerMenu()
{
   
    for(let i= 0 ; i<10 ; i++)
    {
        codeUssd = prompt("Composez le code USSD");
        if(codeUssd== "*105#")
        {
            code1= prompt("Entrez votre mot de passe pour acceder")
            menu = prompt(`Menu Mobile Money
            Entrez votre choix
            1- Depot 
            2- Retrait 
            3- Mon compte 
            4-Activer un forfait
            `);

        }
        else
        {
            alert("Choix invalide");
            break ;
        }
        switch (menu)
        {
            case "1":
            montantRecharger =parseInt( prompt("Entrez le montant a recharger : "));
            codeSaisi =prompt("Entrez votre mot de passe pour confirmer" );
    
            if(codeSaisi== code1)
            {   
                
            
                alert("Felicitation , vous avez rechargez : " + Menu1(montantRecharger)) ;
            }
            else
            {
                alert("Incorrect , veuillez ressayer");
                break ;
            }
            break ;
            case "2" :
            codeSaisi =prompt("Entrez votre mot de passe pour confirmer" );
            montantRetirer = parseInt(prompt("Entrez le montant a retirer"));
            
            if(codeSaisi== code1)
            {
                alert("Felicitation , vous avez retirez : " + montantRetirer + "Votre nouveau solde est de : " + Menu2(montantRetirer)  ) ;
            }
            else
            {
                alert("Erreur , veuillez ressayez ") ;
                break ;
            }
            break ;

            
            


            case "3" :
            let menu2= prompt((`
                1-Solde
                2-Changer de code pin`))
            switch (menu2)
            {
                case "1" :
                    alert("Votre solde est de : " + soldeInitial + "FRS CFA") ;
                break ;
                case "2" :
                    nouveauMotDePasse = prompt("Entrez un nouveau mot de passe : ");
                    if(nouveauMotDePasse)
                    {
                        code1 = nouveauMotDePasse ;
                        alert("Votre mot de passe a ete change avec success : " + code1) ;
                    }
                    else
                    {
                        alert("Erreur") ;
                        break ;

                        
                    }
                break ;
            }
            case "4" :
                let menu3 =prompt(`
                    1-Forfait appel
                    `) ;
                switch (menu3)
                {
                    case "1" :
                    let menuAppel = prompt(`
                        1- 10 min a 150 frs cfa
                        2 25 min a 200 frs`);
                    
                    switch(menuAppel)
                    {
                        case "1" :
                            if (soldeInitial >= 150)
                            {
                                alert("Felicitations , vous venez d activer 10 min a 150 frs cfa , votre nouveau solde est de :" + soldeAppel1() +"XAF")
                            }
                            else
                            {
                                alert("Solde insuffisant");
                                    
                            }
                        break ;
                        case "2" :
                            if (soldeInitial >= 200)
                            {
                                alert("Felicitations , vous venez d activer 20 min a 200 frs cfa , votre nouveau solde est de :" + soldeAppel2() +"XAF")
                            }
                            else
                            {
                                alert("Solde insuffisant");
                            }       
                        break ;
             
                    }
                           
                    




                
                
                    
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                }
                
                    
                

                
                

        }   
                        
                


    }
    
        
    
    
    
    
    
    
}
        
            
   
        

  
    
    
    
    
    
    
    
    
    
    
    
    
    
    


function Menu1(montantRecharger )
{
    soldeInitial += montantRecharger ;
    return soldeInitial ;

}
function Menu2(montantRetirer){

    soldeInitial -= montantRetirer ;
    return soldeInitial ;
}
function soldeAppel1(){
    const min1 = 150 ;
    soldeInitial -= min1 ;
    return soldeInitial ;
    

}
function soldeAppel2(){
    const min2 = 200 ;
    soldeInitial -= min2 ;
    return soldeInitial ;
    

}






let ecran1= document.getElementById("ecran");


ecran1.addEventListener("click" , function(){
     lancerMenu()
})


