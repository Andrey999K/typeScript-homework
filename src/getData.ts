const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

type User = {
  id: number,
  email: string
};

const getData = async (url: string): Promise<User[]> => {
  return await fetch(url)
    .then(response => response.json());
}

getData(COMMENTS_URL)
  .then((data: User[]) => {
    for (const item of data) {
      console.log(`ID: ${item.id}, Email: ${item.email}`)
    }
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */