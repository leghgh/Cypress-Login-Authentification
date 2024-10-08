
/// <reference types="cypress" />
afterEach(()=>{
    cy.log("execution une fois après chaque cas de test");
}) ;

beforeEach(()=>{
    cy.log("execution une fois avants chaque  cas de test");

}) ;

/*describe('nom de la suite de test', function(){
    it('nom du cas de test', function(){
        //les étapes du cas de test 
            // saisir url
            //saisir  password
            //cliquer sur le bouton se connecter
            //Assertion sur la page attendue
    });
})*/

//Expression lambda (Java8): function(){} équivalente ()=>{}
    after(()=>{
        cy.log("execution une seule fois après tous les cas de test");
    
    }) ;
context('sénario login',()=>{
    // les différents cas de test de cette suite de test
    it('login avec des paramètres valides', function(){
        // les étapes du cas de test
        cy.visit("alibabaUrl");
        
        cy.log('login avec des paramètres valides') ;
    }) ;
    
    it('login avec des paramètres invalides', function(){
        // les étapes du cas de test
        
        cy.log('login avec des paramètres invalides') ;
    }) ;

})

before(()=>{
    cy.log("execution une seule fois avants tous les cas de test");
}) ;
/*context('sénario logout',()=>{

    it('logout', function(){
        // les étapes du cas de test
        cy.log('se déconnecter') ;
    }) ;
});*/