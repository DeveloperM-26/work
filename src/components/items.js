import React, { useState } from 'react';

export default function Items(props) {
    return(
        navItems.map((item, i) => {
            return(
              <Typography component="p" color="secondary">
                {item.title}
             </Typography>
            )
          })
    )
}