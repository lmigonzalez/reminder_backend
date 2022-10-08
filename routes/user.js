const router = require('express').Router();
const { connection } = require('../db');

router.get('/inf', async (req, res) => {
  try {
    let q = 'SELECT * FROM users';
    connection.query(q, function (error, results) {
      if (error) {
        console.log(error);
      }
      res.status(200).json(results);
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
});

router.post('/new-user', async (req, res) => {
  try {
    const newUser = req.body;
    let q = 'INSERT INTO users SET ?';
    connection.query(q, newUser, function (error, results) {
      if (error) {
        console.log(error);
      }
      res.status(201).json(results);
    });

  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
});

router.get('/get-cards/:id', (req, res)=>{
	try{
		
		const id = req.params.id
		console.log(req.params.id)
		let q = 'SELECT * FROM cards WHERE UserId = ?'
		connection.query(q, [id], (error, results)=>{
			if(error){
				console.log(error)
			}
			res.status(200).json(results)
		})
	}catch(err){
		res.status(404).json({
			message: err,
		  });
	}
});

router.post('/add-card', (req, res)=>{
	try{
		const newCard = req.body

		console.log(newCard)
		let q = 'INSERT INTO cards SET ?'
		connection.query(q, newCard, (error, results)=>{
			if(error){
				console.log(error)
			}
			res.status(201).json(results)
		})
	}catch(err){
		res.status(404).json({
			message: err,
		  });
	}
});

router.patch('/update-card', (req, res)=>{
	try{
		const {ID, CardName, TotalCredit, Debt, DueDate, Payment} = req.body

		// console.log(cardToUpdate)
		// console.log(id)
		let q = 'UPDATE cards SET CardName = ?, TotalCredit = ?, Debt = ?, DueDate = ?, Payment = ? WHERE ID = ?'
		connection.query(q, [CardName, TotalCredit, Debt, DueDate, Payment, ID], (error, results)=>{
			if(error){
				console.log(error)
			}
			res.status(202).json(results)
		})
	}catch(err){
		res.status(404).json({
			message: err,
		  });
	}
});


router.delete('/delete-card', (req, res) =>{
	try{

		const cardId = req.body.cardId;
		let q = 'DELETE FROM cards WHERE ID = ?'
		connection.query(q, [cardId], (error, results)=>{
			if(error){
				console.log(error)
			}
			res.status(200).json(results)
		})


	}catch(err){
		res.status(404).json({
			message: err
		})
	}
})

module.exports = router;


// {
//     "CardName": "Target",
//     "TotalCredit": 1500,
//     "Debt": 500,
//     "DueDate": "2022-10-05",
//     "Payment": 120,
//     "UserId": 2
// }

// ["Target", 1500, 500, "2022-10-05", 120, 2]
