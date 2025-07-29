import { User } from '../types/User';
import { client } from '../utils/fetchClient';

export const getUsers = () => {
  return client.get<User[]>(`/users`);
};

// // Add more methods here
// export const addPost = ({ name }: Omit<User, 'id' | 'userId'>) => {
//   return client.post<User>('/todos', { name, userId: USER_ID });
// };

// export const deletePost = (todoId: number) => {
//   return client.delete(`/todos/${todoId}`);
// };
// function deletePost(postId: number) {
//   setPosts(currentPosts => currentPosts.filter(post => post.id !== postId));
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const updatePost = ({ id, ...todoData }: Todo) => {
//   return client.patch<Todo>(`/todos/${id}`, todoData);
// };

// export function updatePost({ id, ...postData }: Post) {
//   return client.patch<Post>(`/posts/${id}`, postData);
// }
// return Promise.reject(new Error('Unable to update a todo'));
