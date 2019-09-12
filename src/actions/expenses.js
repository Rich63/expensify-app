import database from '../firebase/firebase'

/* 
  steps without asynchronize
  1. component calls action generator
  2. action generator returns object
  3. component dispatches object
  4. redux store changes

  steps withasynchronize
  1. component calls action generator
  2. action generator returns function
  3. component dispatches function (?)
  4. function runs (has the ability to dispatch other actions and do whatever it wants)
*/

// ADD_EXPENSE
export const addExpense = (expense) => ({ 
  type: 'ADD_EXPENSE',
  expense
})

// t.b.v. saving to database part 152
export const startAddExpense = (expenseData  = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const {
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0
    } = expenseData

  const expense = { description, note, amount, createdAt }
  
  return database
    .ref(`users/${uid}/expenses`)
    .push(expense)
    .then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }))
    })
  }
}

// EDIT_EXPENSE
export const editExpense = ( id, updates ) => ({ 
  type: 'EDIT_EXPENSE',
  id,
  updates
})

export const startEditExpense = ( id, updates ) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates))
    })
  }
}

// SET_EXPENSES
export const setExpenses = ( expenses ) => ({ 
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses = []

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })

      dispatch(setExpenses(expenses))
    })
  }
}

/* 

  startSetExpenses
  
  So right away we can return our function. And this is the function that has access to dispatch this is exactly what we did up above for our only
  other asynchronous function. Now we are inside of here and we can start doing something with firebase. In our case what we need to do is fetch 
  from firebase. So I am going to be accessing a database which is already imported ref to get the expenses wrap and this is what you needed to do 
  as well. Now from here we are going to access a single time all of the data stored at this location using data once. I'm going to get the value 
  just one time then I will toss on it then and I will add my success case. So what do I want to do when I do get the data back. I want to go ahead 
  and parse it. I get the snapshot but a snapshot does not give me what I want the snapshot would give me that object structure.

  I want to make sure to convert that over to an array structure before I do that. I'm also going to toss a return on here. This makes sure the 
  promise actually gets returned and that is what's going to allow us to have access to. Then right here are we actually dispatch things with all of 
  this in place. All we need to do is fill out what's right inside of here. And the first step to getting that done is going to be to create accounts 
  expenses. We're going to start off with no expenses then we're going to go through the process of parsing the data using snapshots for each Just 
  like we did over in the other file for each is going to get called one time for every child. We're going to have access to that child snapshot and 
  I can call that child snapshot. Now inside of here we have to use expenses not push you needed to actually push all of the expenses on the array.

  Right here we're going to push on an object. The first thing the ID is going to come from the snapshot key property that would be child snapshot 
  Docky. Now after that what do we have. We want all of the values. So I'm going to spread out child snapshot dot Val. Now after four each We're 
  going to have access to that built up expenses array and all we need to do is actually dispatch said expenses I'm going to use dispatch.

  I'm going to call set expenses the thing we've created in the last video then I'm going to pass to set expenses what it expects and it expects an 
  array of expenses. I have access to an array of expenses right here. I pass in expenses and there we go. Now I didn't ask you to write any test 
  cases I just asked you to fill out this function and hopefully you came up with something similar to this. We fetch the data. We parse the data 
  and we actually get the data in redux. Now we can go ahead and remove the comments down below. I'm going to save the file and see what happens.

  Set expenses. Excuse me start said expenses should exist and it should actually get our data back. Right here we can see we went from the loading 
  screen to the app screen I have from dev and from real site all showing up because those are in firebase. Now I could even create a new one I 
  could call this one something new from site I could give it an amount of $34 and 50 cents and I could add it when I add it it's going to show up 
  on the list but it always did that. So let's actually refresh things and make sure it stays around. It should stay around because we fetch the 
  data right here. We are getting something new from site. We are getting our correct price end date 34 50 on Aug. 20 first. So there we go. 
  We have our asynchronous action in place. This one fetches the data and gets it all inside of redux.
*/