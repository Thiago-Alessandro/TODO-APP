import { User } from "src/models/users/user";

import { UserRepository } from "src/repositories/user.repository";

let userRepository: UserRepository



export const users: User[] =  userRepository.getUsers().subscribe({
	next:(value) =>{
		this.users = value
	}
  });//tem algo de errado aq (provavelmente qnd adiciono n vai pq aq n ta atualizando a lista mas n sei oq setar)


// dados.getUsers().forEach(usuarios =>{

// 		return usuarios
	
// })

// [
// 	{
// 		"id": "joao.silva",
// 		"name": "João da Silva",
// 		"groups": [],
// 		"cardPermissions": [
// 			"Add"
// 		],
// 		"propertiesPermissions": [
// 			"Add"
// 		]
// 	},
// 	{
// 		"id": "henrique.santos",
// 		"name": "Henrique Santos",
// 		"groups": [],
// 		"cardPermissions": [
// 			"Edit"
// 		],
// 		"propertiesPermissions": [
// 			"Edit"
// 		]
// 	},
// 	{
// 		"id": "igor.oliveira",
// 		"name": "Igor Oliveira",
// 		"groups": [],
// 		"cardPermissions": [
// 			"Remove"
// 		],
// 		"propertiesPermissions": [
// 			"Remove"
// 		]
// 	},
// 	{
// 		"id": "igor.guimaraes",
// 		"name": "Igor Guimaraes",
// 		"groups": [],
// 		"cardPermissions": [
// 			"MoveCard"
// 		],
// 		"propertiesPermissions": [
// 			"Add",
// 			"Edit"
// 		]
// 	},
// 	{
// 		"id": "diogo.defante",
// 		"name": "Diogo Defante",
// 		"groups": [],
// 		"cardPermissions": [
// 			"Add",
// 			"Edit",
// 			"Remove",
// 			"MoveCard"
// 		],
// 		"propertiesPermissions": [
// 			"Add",
// 			"Edit",
// 			"Remove"
// 		]
// 	}
// ]
