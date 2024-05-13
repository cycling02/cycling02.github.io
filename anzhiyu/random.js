var posts=["undefined/d73d9aa0/","undefined/6c40434b/","undefined/e817ffda/","undefined/e5f66663/","undefined/91208508/","undefined/368776e6/","undefined/6b5f11fd/","undefined/e779e2ee/","undefined/8093261a/","undefined/3b7989e0/","undefined/2023caab/","undefined/a0a38a3f/","undefined/91208508/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };