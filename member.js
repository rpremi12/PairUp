
class Member{
	constructor(line){
		this.time = line[0] 
		this.cpEmail = line[1]
		this.pairType = line[2]
		this.name = line[3] + " " + line[4]
		this.hometown = line[5] //needs function
		this.gender = line[6] 
		this.major = line[7] //needs function
		this.gradYear = line[8] 
		this.tSize = line[9]
		this.birthday = line[10] //maybe function?
		this.dietary = line[11] //maybe function?
		this.allergies = line[12]
		this.myerBriggs = line[13]
		this.matchOn = line[14]
		this.partying = line[15]
		this.spontan = line[16]
		this.trovert = line[17]
		this.foodLikes= line[18]
		this.foodDislikes = line[19]
		this.showLikes = line[20]
		this.showDislikes = line[21]
		this.sportsLikes = line[22]
		this.sportsDislikes = line[23]
		this.animalLikes = line[24]
		this.animalDislikes = line[25]
		this.musicLikes = line[26]
		this.musicDislikes = line[27]
		this.weirdLikes = line[28]
		this.weirdDislikes = line[29]
		this.adjectives = line[30]
		this.hobbies = line[31]
		this.podcast = line[32]
		this.fears = line[33]
		this.bucketList = line[34]
		this.inspiresYou = line[35]
		this.stupidThing = line[36]
		this.toDo = line[37]
		this.freeDay = line[38]
		this.freeMoney = line[39]
		this.whatelse = line[40]
	}
}

function tsv_to_dict(){

}