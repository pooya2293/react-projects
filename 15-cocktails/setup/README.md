#### React Router Fix

(Fix)[https://dev.to/dance2die/page-not-found-on-netlify-with-react-router-58mc]

#### CRA Fix
//i found it why jhon change build script becuse in build option in netlify from github directly need CI= before build script
```

"build": "CI= react-scripts build",

```
