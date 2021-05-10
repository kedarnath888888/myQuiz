class Quiz { 
    constructor(){}
     getState(){ 
         var gameStateRef = database.ref('gameState');
          gameStateRef.on("value",function(data){
               gameState = data.val();
             })
             } 
             update(state){ 
                 database.ref('/').update({ 
                     gameState: state
                     });
                     } 
                     async start(){ 
                         if(gameState === 0){ 
                             contestant = new Contestant();
                              var contestantCountRef = await database.ref('contestantCount').once("value");
                               if(contestantCountRef.exists()){ 
                                   contestantCount = contestantCountRef.val();
                                    contestant.getCount();
                                 }
                                  question = new Question();
                                   question.display();
                                 } 
                                } 
                                play(){
                                     //write code here to hide question elements
                                      question.hide();
                                       //write code to change the background color here 
                                       background("pink");
                                        //write code to show a heading for showing the result of Quiz 
                                        fill(0);
                                         textSize(30);
                                          text("Result of the Quiz",340, 50); 
                                          text("----------------------------",320, 65);
                                           //call getContestantInfo( ) here Contesta
                                           Contestant.getPlayerInfo();
                                            if(allContestants !== undefined){ 
                                               
                                                 var display_Answers=230;
                                                 fill ("Blue");
                                                  textSize(20);
                                                   //text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
                                                    for(var plr in allContestants){
                                                         
                                                          var correctAns = "2"; 
                                                          if (correctAns === allContestants[plr].answer) 
                                                          fill("Green")
                                                           else fill("red");
                                                         } 
                                                         display_Answers+=30;
                                                          textSize(20); 
                                                          text(allContestants[plr].name + ":" + allContestants[plr].answer, 270,display_Answers)
                                                          if(allContestants[plr].answer=== "4" ){
                                                               text ("Your answer is correct",290,350) 
                                                            } 
                                                            else if(allContestants[plr].answer=== "3" || allContestants[plr].answer=== "2" || allContestants[plr].answer=== "1" ){ 
                                                                text ("Your answer is incorrect",290,350)
                                                             }
                                                            }
                                                        }
                                                    }