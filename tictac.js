function reset() 
{
	window.location.reload();
	for (i = 1; i < 10; i++)
	{
		getId("box"+i).value = '';
		getId("button"+i).disabled = false;
	}
}

function getId(x) { return document.getElementById(x); }

var cr = 0; //holds the current round of the game
var GameState = ['','','','','','','','',''];

function assign1()
{
	getId("box1").value = "X";
	getId("button1").disabled=true;	
	cr++;
	
	GameState[0] = "X";
	get0();	
}

function assign2() 
{
	getId("box2").value = "X";
	getId("button2").disabled=true;	
	cr++;
	
	GameState[1] = "X";
	get0();
}

function assign3() 
{
	getId("box3").value = "X";
	getId("button3").disabled=true;	
	cr++
	
	GameState[2] = "X";
	get0();
}

function assign4() 
{
	getId("box4").value = "X";
	getId("button4").disabled=true;	
	cr++;
	
	GameState[3] = "X";
	get0();
}

function assign5()
{
	getId("box5").value = "X";
	getId("button5").disabled=true;
	cr++;
	
	GameState[4] = "X";
	get0();
}

function assign6() 
{
	getId("box6").value = "X";
	getId("button6").disabled=true;	
	cr++;

	GameState[5] = "X";
	get0();
}

function assign7() 
{
	getId("box7").value = "X";
	getId("button7").disabled=true;	
	cr++;
	
	GameState[6] = "X";
	get0();
}

function assign8() 
{
	getId("box8").value = "X";
	getId("button8").disabled=true;	
	cr++;
	
	GameState[7] = "X";
	get0();
}

function assign9() 
{
	getId("box9").value = "X";
	getId("button9").disabled=true;	
	cr++;
	
	GameState[8] = "X";
	get0();
}


function get0() 
{	
	switch (cr)
	{
		case 1:			 
			if (GameState[4]=="X")
			{
				getId("box3").value = "O";
				getId("button3").disabled = true;
				GameState[2] = "O";
			}		
			else 
			{
				getId("box5").value = "O";
				getId("button5").disabled = true;
				GameState[4] = "O";
			} 	
			break;
		case 2:
			pos = chkXWin();
			if (pos != -1)
			{
				forid = pos + 1;
				getId("box" + forid).value = "O";
				getId("button" + forid).disabled = true;
				GameState[pos] = "O";
				return;
			}
			//if button 1 was pressed in case 1
			if (GameState[0]=="X")
			{
				if (GameState[1]=="X" || GameState[5]=="X" ) 
				{
					getId("box3").value = "O";
					getId("button3").disabled = true;
					GameState[2] = "O"; 
				}
				else if (GameState[2]=="X" || GameState[8]=="X") 
				{
					getId("box2").value = "O";
					getId("button2").disabled = true; 
					GameState[1] = "O";
				}
				else if (GameState[3]=="X" || GameState[7]=="X") 
				{
					getId("box7").value = "O";
					getId("button7").disabled = true; 
					GameState[6] = "O";
				}
				else if (GameState[6]=="X") 
				{
					getId("box4").value = "O";
					getId("button4").disabled = true;
					GameState[3] = "O"; 
				} 
			}					
			//if button 2 was pressed in case 1				
			else if	(GameState[1]=="X") 
			{
				if (GameState[0]=="X" || GameState[8]=="X")
				{
					getId("box3").value = "O";
					getId("button3").disabled = true;
					GameState[2] = "O";  
				}	
				else if	(GameState[2]=="X" || GameState[3]=="X" || GameState[5]=="X" || GameState[6]=="X" || GameState[7]=="X") 
				{
					getId("box1").value = "O";
					getId("button1").disabled = true; 
					GameState[0] = "O"; 
				}	
			}
			//if button 3 was pressed in case 1	
			else if	(GameState[2]=="X") 
			{
				if (GameState[0]=="X" || GameState[6]=="X") 
				{
					getId("box2").value = "O";
					getId("button2").disabled = true;
					GameState[1] = "O";  
				}	
				else if	(GameState[1]=="X" || GameState[3]=="X") 
				{
					getId("box1").value = "O";
					getId("button1").disabled = true;
					GameState[0] = "O";  
				}
				else if	(GameState[5]=="X" || GameState[7]=="X") 
				{
					getId("box9").value = "O";
					getId("button9").disabled = true;
					GameState[8] = "O";  
				}
				else if	(GameState[8]=="X") 
				{
					getId("box6").value = "O";
					getId("button6").disabled = true;
					GameState[5] = "O";  
				}		
			}
			//if button 4 was pressed in case 1	
			else if	(GameState[3]=="X") 
			{			
				if	(GameState[0]=="X") 
				{
					getId("box7").value = "O";
					getId("button7").disabled = true;
					GameState[6] = "O";  
				}	
				else if	(GameState[1]=="X" || GameState[2]=="X" || GameState[5]=="X" || GameState[7]=="X" || GameState[8]=="X") 
				{
					getId("box1").value = "O";
					getId("button1").disabled = true;
					GameState[0] = "O";  
				}
			}
			//if button 5 was pressed in case 1		
			else if	(GameState[4]=="X")
			{
				if (GameState[0]=="X" ) 
				{
					getId("box9").value = "O";
					getId("button9").disabled = true;				
					GameState[8] = "O"; 
				}
				else if (GameState[1]=="X") 
				{
					getId("box8").value = "O";
					getId("button8").disabled = true;
					GameState[7] = "O";  
				}
				else if (GameState[3]=="X") 
				{
					getId("box6").value = "O";
					getId("button6").disabled = true; 
					GameState[5] = "O"; 
				}
				else if (GameState[5]=="X") 
				{
					getId("box4").value = "O";
					getId("button4").disabled = true; 
					GameState[3] = "O"; 
				}
				else if (GameState[6]=="X" || GameState[8]=="X") 
				{
					getId("box1").value = "O";
					getId("button1").disabled = true; 
					GameState[0] = "O"; 
				}
				else if (GameState[7]=="X") 
				{
					getId("box2").value = "O";
					getId("button2").disabled = true; 
					GameState[1] = "O"; 
				}
			}
			//if button 6 was pressed in case 1
			else if	(GameState[5]=="X") 
			{		
				if (GameState[0]=="X" || GameState[1]=="X" || GameState[3]=="X" || GameState[8]=="X") 
				{
					getId("box3").value = "O";
					getId("button3").disabled = true; 
					GameState[2] = "O"; 
				}		
				else if (GameState[2]=="X" || GameState[6]=="X" || GameState[7]=="X") 
				{
					getId("box9").value = "O";
					getId("button9").disabled = true;
					GameState[8] = "O";  
				}						
			}
			//if button 7 was pressed in case 1		
			else if	(GameState[6]=="X") 
			{	
				if	(GameState[0]=="X" ) 
				{
					getId("box4").value = "O";
					getId("button4").disabled = true;
					GameState[3] = "O";  
				}		
				else if	(GameState[1]=="X" || GameState[3]=="X" ) 
				{
					getId("box1").value = "O";
					getId("button1").disabled = true;
					GameState[0] = "O";  
				}
				else if	(GameState[2]=="X" || GameState[8]=="X") 
				{
					getId("box8").value = "O";
					getId("button8").disabled = true; 
					GameState[7] = "O"; 
				}
				else if	(GameState[5]=="X" || GameState[7]=="X") 
				{
					getId("box9").value = "O";
					getId("button9").disabled = true; 
					GameState[8] = "O"; 
				}
			}
			//if button 8 was pressed in case 1				
			else if	(GameState[7]=="X") 
			{
				if	(GameState[0]=="X" || GameState[3]=="X" || GameState[8]=="X") 
				{
					getId("box7").value = "O";
					getId("button7").disabled = true; 
					GameState[6] = "O"; 
				}		
				else if	(GameState[1]=="X" ||GameState[2]=="X" || GameState[5]=="X" || GameState[6]=="X") 
				{
					getId("box9").value = "O";
					getId("button9").disabled = true;
					GameState[8] = "O";  
				}
			}
			//if button 9 was pressed in case 1	
			else if	(GameState[8]=="X") 
			{		
				if (GameState[0]=="X" || GameState[2]=="X") 
				{
					getId("box6").value = "O";
					getId("button6").disabled = true;
					GameState[5] = "O";  
				}		
				else if	(GameState[1]=="X" || GameState[5]=="X") 
				{
					getId("box3").value = "O";
					getId("button3").disabled = true; 
					GameState[2] = "O"; 
				}
				else if	(GameState[3]=="X" || GameState[7]=="X") 
				{
					getId("box7").value = "O";
					getId("button7").disabled = true; 
					GameState[6] = "O"; 
				}
				else if	(GameState[6]=="X") 
				{
					getId("box8").value = "O";
					getId("button8").disabled = true; 
					GameState[7] = "O"; 
				}
			}		
			else //if still don't know where to go, go in first blank box
			{
				pos = firstBlankBox();
				pos++;
				getId("box"+pos).value = "O";
				getId("button"+pos).disabled = true;
				GameState[pos-1] = "O";
			}
			chkWin();
			break;		
		case 3:
			pos = winOPos();
			if (pos == -1)
				pos = chkXWin(); //try this if no winning position for O
			if (pos != -1)
			{
				pos++;
				getId("box" + pos).value = "O";
				getId("button" + pos).disabled = true;
				GameState[pos-1] = "O";
				chkWin();
				return;
			}
			//buttons 1 & 2
			if (GameState[0]=="X" && GameState[1]=="X")
			{
				if (GameState[6]=="X")
				{
					getId("box4").value = "O";
					getId("button4").disabled = true;
					GameState[3] = "O"; 
				}																	
				else
				{
					getId("box7").value = "O";
					getId("button7").disabled = true; 
					GameState[6] = "O";
				}				
			}
			//buttons 1 & 3
			else if (GameState[0]=="X" && GameState[2]=="X")
			{
				if (GameState[7]=="X")	
				{
					getId("box4").value = "O";
					getId("button4").disabled = true;
					GameState[3] = "O"; 
				}																	
				else 
				{
					getId("box8").value = "O";
					getId("button8").disabled = true; 
					GameState[7] = "O";
				}				
			}
			//buttons 1 & 4
			else if (GameState[0]=="X" && GameState[3]=="X")
			{
				if (GameState[2]=="X")	
				{
					getId("box2").value = "O";
					getId("button2").disabled = true;
					GameState[1] = "O"; 
				}																	
				else 
				{
					getId("box3").value = "O";
					getId("button3").disabled = true; 
					GameState[2] = "O";
				}				
			}
			//buttons 1 & 6 OR buttons 1 & 7
			else if (GameState[0]=="X" && GameState[5]=="X")
			{
				if (GameState[6]=="X" && GameState[3]=='')	
				{
					getId("box4").value = "O";
					getId("button4").disabled = true;
					GameState[3] = "O"; 
				}																	
				else if (GameState[6]=="X" && GameState[7]=='')
				{
					getId("box8").value = "O";
					getId("button8").disabled = true;
					GameState[7] = "O";
				}
				else if (GameState[6]=='')
				{
					getId("box7").value = "O";
					getId("button7").disabled = true; 
					GameState[6] = "O";
				}				
			}						
			//buttons 1 & 8
			else if (GameState[0]=="X" && GameState[7]=="X")
			{
				if (GameState[2]=="X")	
				{
					getId("box2").value = "O";
					getId("button2").disabled = true;
					GameState[1] = "O"; 
				}																	
				else 
				{
					getId("box3").value = "O";
					getId("button3").disabled = true; 
					GameState[2] = "O";
				}				
			}						
			//buttons 1 & 9
			else if (GameState[0]=="X" && GameState[8]=="X")
			{
				if (GameState[7]=="X")	
				{
					getId("box7").value = "O";
					getId("button7").disabled = true;
					GameState[6] = "O"; 
				}																	
				else 
				{
					getId("box8").value = "O";
					getId("button8").disabled = true; 
					GameState[7] = "O";
				}				
			}
			//if still can't find any moves take first blank spot
			else
			{
				pos = firstBlankBox();
				pos++;
				getId("box"+pos).value = "O";
				getId("button"+pos).disabled = true;
				GameState[pos-1] = "O";
			}
			chkWin();
			break;
		case 4: //game should lead to win or tie by now
			//look for winning move or fill in random blank
			pos = winOPos();
			if (pos == -1)
				pos = chkXWin();
				if (pos == -1)
					pos = firstBlankBox();
			forid = parseInt(pos) + 1;
			getId("box" + forid).value = "O";
			getId("button" + forid).disabled = true;
			GameState[pos] = "O";
			chkWin();
			break;
	}
}

/* function return winning position for "O" computer */
function winOPos()
{
	var status = Array(9); //create array of game status using 1 for O and 0 for X
	//copy game status
	for (i in GameState)
	{
		if (GameState[i] == "O" || GameState[i] == '')
			status[i] = 1;
		else if (GameState[i] == "X")
			status[i] = 0;
	}
	pos = 0;
	//24 possible ways to win, check them all
	if (status[0] && status[1] && status[2]) //TOP ROW
	{
		//if any of the positions are empty, that's the winning position
		blanks = 0;
		for (i = 0; i < 3; i++)
			if (GameState[i] == '')
			{
				blanks++;
				pos = i;
			}
		//if only one box is blank, that's the winning position
		if (blanks == 1)
			return pos;
	}
	if (status[3] && status[4] && status[5]) //MIDDLE ROW
	{
		blanks = 0;
		for (i = 3; i < 6; i++)
			if (GameState[i] == '')
			{
				blanks++;
				pos = i;
			}
		if (blanks == 1)
			return pos;
	}
	if (status[6] && status[7] && status[8]) //BOTTOM ROW
	{
		blanks = 0;
		for (i = 6; i < 9; i++)
			if (GameState[i] == '')
			{
				blanks++;
				pos = i;
			}
		if (blanks == 1)
			return pos;
	}
	if (status[0] && status[3] && status[6]) //LEFT COLUMN
	{
		blanks = 0;
		for (i = 0; i < 7; i = i + 3)
			if (GameState[i] == '')
			{
				blanks++;
				pos = i;
			}
		if (blanks == 1)
			return pos;
	}
	if (status[1] && status[4] && status[7]) //MIDDLE COLUMN
	{
		blanks = 0;
		for (i = 1; i < 8; i = i + 3)
			if (GameState[i] == '')
			{
				blanks++;
				pos = i;
			}
		if (blanks == 1)
			return pos;
	}
	if (status[2] && status[5] && status[8]) //RIGHT COLUMN
	{
		blanks = 0;
		for (i = 2; i < 9; i = i + 3)
			if (GameState[i] == '')
			{
				blanks++;
				pos = i;
			}
		if (blanks == 1)
			return pos;
	}
	if (status[0] && status[4] && status[8]) //LEFT-TO-RIGHT DIAGONAL
	{
		blanks = 0;
		for (i = 0; i < 9; i = i + 4)
			if (GameState[i] == '')
			{
				blanks++;
				pos = i;
			}
		if (blanks == 1)
			return pos;
	}
	if (status[2] && status [4] && status[6]) //RIGHT-TO-LEFT DIAGONAL
	{
		blanks = 0;
		for (i = 2; i < 7; i = i + 2)
			if (GameState[i] == '')
			{
				blanks++;
				pos = i;
			}
		if (blanks == 1)
			return pos;
	}
	return -1;
}

/* function to return position to block X */
function chkXWin()
{
	var status = Array(9); //create array of game status using 1 for O and 0 for X
	//copy game status
	for (i in GameState)
	{
		if (GameState[i] == "X" || GameState[i] == '')
			status[i] = 1;
		else if (GameState[i] == "O")
			status[i] = 0;
	}
	//24 possible ways to win, check them all
	if (status[0] && status[1] && status[2]) //TOP ROW
	{
		//if any of the positions are empty, that's the winning position
		blanks = 0;
		for (i = 0; i < 3; i++)
			if (GameState[i] == '')
			{
				blanks++;
				pos = i;
			}
		//if only one box is blank, that's the winning position
		if (blanks == 1)
			return pos;
	}
	if (status[3] && status[4] && status[5]) //MIDDLE ROW
	{
		blanks = 0;
		for (i = 3; i < 6; i++)
			if (GameState[i] == '')
			{
				blanks++;
				pos = i;
			}
		if (blanks == 1)
			return pos;
	}
	if (status[6] && status[7] && status[8]) //BOTTOM ROW
	{
		blanks = 0;
		for (i = 6; i < 9; i++)
			if (GameState[i] == '')
			{
				blanks++;
				pos = i;
			}
		if (blanks == 1)
			return pos;
	}
	if (status[0] && status[3] && status[6]) //LEFT COLUMN
	{
		blanks = 0;
		for (i = 0; i < 7; i = i + 3)
		{
			if (GameState[i] == '')
			{
				blanks++;
				pos = i;
			}
		}
		if (blanks == 1)
			return pos;
	}
	if (status[1] && status[4] && status[7]) //MIDDLE COLUMN
	{
		blanks = 0;
		for (i = 1; i < 8; i = i + 3)
			if (GameState[i] == '')
			{
				blanks++;
				pos = i;
			}
		if (blanks == 1)
			return pos;
	}
	if (status[2] && status[5] && status[8]) //RIGHT COLUMN
	{
		blanks = 0;
		for (i = 2; i < 9; i = i + 3)
			if (GameState[i] == '')
			{
				blanks++;
				pos = i;
			}
		if (blanks == 1)
			return pos;
	}
	if (status[0] && status[4] && status[8]) //LEFT-TO-RIGHT DIAGONAL
	{
		blanks = 0;
		for (i = 0; i < 9; i = i + 4) {
			if (GameState[i] == '')
			{
				blanks++;
				pos = i;
			}
		}
		if (blanks == 1)
			return pos;
	}
	if (status[2] && status [4] && status[6]) //RIGHT-TO-LEFT DIAGONAL
	{
		
		blanks = 0;
		for (i = 2; i < 7; i = i + 2)
			if (GameState[i] == '')
			{
				blanks++;
				pos = i;
			}
		if (blanks == 1)
			return pos;
	}
	return -1; //return false because X won't win anyways
}

function firstBlankBox()
{
	//just take the first empty box
	for (i in GameState)
		if (GameState[i] == '')
			return i;
}

function chkWin()
{
	var status = Array(9); //create array of game status using 1 for O and 0 for X
	//copy game status
	for (i in GameState)
	{
		if (GameState[i] == "O")
			status[i] = 1;
		else if (GameState[i] == "X" || GameState[i] == '')
			status[i] = 0;
	}
	//8 possible wins
	if (status[0] + status[1] + status[2] == 3) //TOP ROW
	{
		getId("box1").className = 'win';
		getId("box2").className = 'win';
		getId("box3").className = 'win';
		alert('YOU LOSE');
	}
	else if (status[3] + status[4] + status[5] == 3) //MIDDLE ROW
	{
		getId("box4").className = 'win';
		getId("box5").className = 'win';
		getId("box6").className = 'win';
		alert('YOU LOSE');
	}
	else if (status[6] + status[7] + status[8] == 3) //BOTTOM ROW
	{
		getId("box7").className = 'win';
		getId("box8").className = 'win';
		getId("box9").className = 'win';
		alert('YOU LOSE');
	}
	else if (status[0] + status[3] + status[6] == 3) //LEFT COLUMN
	{
		getId("box1").className = 'win';
		getId("box4").className = 'win';
		getId("box7").className = 'win';
		alert('YOU LOSE');
	}
	else if (status[1] + status[4] + status[7] == 3) //MIDDLE COLUMN
	{
		getId("box2").className = 'win';
		getId("box5").className = 'win';
		getId("box8").className = 'win';
		alert('YOU LOSE');
	}
	else if (status[2] + status[5] + status[8] == 3) //RIGHT COLUMN
	{
		getId("box3").className = 'win';
		getId("box6").className = 'win';
		getId("box9").className = 'win';
		alert('YOU LOSE');
	}
	else if (status[0] + status[4] + status[8] == 3) //LEFT-TO-RIGHT DIAGONAL
	{
		getId("box1").className = 'win';
		getId("box5").className = 'win';
		getId("box9").className = 'win';
		alert('YOU LOSE');
	}
	else if (status[2] + status [4] + status[6] == 3) //RIGHT-TO-LEFT DIAGONAL
	{
		getId("box3").className = 'win';
		getId("box5").className = 'win';
		getId("box7").className = 'win';
		alert('YOU LOSE');
	}
	else
		if (cr == 4)
			alert('TIE GAME');
}