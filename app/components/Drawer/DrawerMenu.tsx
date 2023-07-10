'use client'

import { Drawer } from "@mui/material";
import { useState } from 'react';
import SearchSideBar from "../search/SearchSideBar/SearchSideBar";
import { Cuisine, PRICE,Location } from "@prisma/client";
import {IoFilterSharp} from 'react-icons/io5'

interface Search_Params {
    city?: string;
    cuisine?: string;
    price?: PRICE;
  }
  


const DrawerMenu= ({
    locations,
    cuisines,
    searchParams,
  }: {
    locations: Location[];
    cuisines: Cuisine[];
    searchParams: Search_Params;
  }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
      setIsDrawerOpen(true);
    };
  
    const handleDrawerClose = () => {
      setIsDrawerOpen(false);
    };
    return (
        <div className="fixed md:hidden left-2">
          <button id="drawer-button" className="text-white p-2 rounded-full bg-sky-900" onClick={handleDrawerOpen}><IoFilterSharp/></button>

        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          
          sx={{
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                minWidth:150,
              boxSizing: 'border-box',
            },
          }}
        >
          <SearchSideBar  cuisines={cuisines}
          locations={locations}
          searchParams={searchParams}/>
        </Drawer>
        </div>
      );
    };
export default DrawerMenu;