document.addEventListener('click', event => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id

    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }
})



async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'})
}

document.addEventListener('click', event => {
  if (event.target.dataset.type === 'edit') {
    const title = prompt('Введите новое название');
    const id = event.target.dataset.id;
    edit(id, title);
  }
})
async function edit(id, title) {
  if(title !== '') {
    await fetch(`/${id}`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          title,
      })
  })
  }
  // .then((loadedProduct) => loadedProduct.json())
  }