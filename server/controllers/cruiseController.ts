import { Request, Response } from "express";
import { storage } from "../storage";
import { z } from "zod";

const getCruises = async (req: Request, res: Response) => {
  try {
    const cruises = await storage.getCruises();
    
    // Apply filters if provided
    let filteredCruises = [...cruises];
    const { 
      destination, 
      startDate, 
      endDate, 
      minPrice, 
      maxPrice, 
      cabinType, 
      cruiseLine,
      duration,
      search
    } = req.query;
    
    if (destination) {
      filteredCruises = filteredCruises.filter(cruise => 
        cruise.location.toLowerCase().includes(String(destination).toLowerCase())
      );
    }
    
    if (startDate && endDate) {
      // Handle date filtering in a real implementation
    }
    
    if (minPrice) {
      filteredCruises = filteredCruises.filter(cruise => 
        cruise.price >= Number(minPrice)
      );
    }
    
    if (maxPrice) {
      filteredCruises = filteredCruises.filter(cruise => 
        cruise.price <= Number(maxPrice)
      );
    }
    
    if (cabinType) {
      filteredCruises = filteredCruises.filter(cruise => 
        cruise.cabinType.toLowerCase() === String(cabinType).toLowerCase()
      );
    }
    
    if (cruiseLine) {
      filteredCruises = filteredCruises.filter(cruise => 
        cruise.cruiseLine.toLowerCase().includes(String(cruiseLine).toLowerCase())
      );
    }
    
    if (duration) {
      // Parse duration ranges like "short", "medium", "long"
      // or specific days like "7" or ranges like "5-10"
      const durationStr = String(duration);
      
      if (durationStr === "short") {
        filteredCruises = filteredCruises.filter(cruise => 
          cruise.durationDays <= 5
        );
      } else if (durationStr === "medium") {
        filteredCruises = filteredCruises.filter(cruise => 
          cruise.durationDays > 5 && cruise.durationDays <= 9
        );
      } else if (durationStr === "long") {
        filteredCruises = filteredCruises.filter(cruise => 
          cruise.durationDays > 9
        );
      } else if (durationStr.includes("-")) {
        const [min, max] = durationStr.split("-").map(Number);
        filteredCruises = filteredCruises.filter(cruise => 
          cruise.durationDays >= min && cruise.durationDays <= max
        );
      } else {
        // Exact duration match
        filteredCruises = filteredCruises.filter(cruise => 
          cruise.durationDays === Number(duration)
        );
      }
    }
    
    if (search) {
      const searchStr = String(search).toLowerCase();
      filteredCruises = filteredCruises.filter(cruise => 
        cruise.name.toLowerCase().includes(searchStr) ||
        cruise.cruiseLine.toLowerCase().includes(searchStr) ||
        cruise.location.toLowerCase().includes(searchStr)
      );
    }
    
    res.json(filteredCruises);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cruises", error });
  }
};

const getCruiseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cruise = await storage.getCruiseById(id);
    
    if (!cruise) {
      return res.status(404).json({ message: "Cruise not found" });
    }
    
    res.json(cruise);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cruise", error });
  }
};

const getCruiseTypes = async (req: Request, res: Response) => {
  try {
    const cruiseTypes = await storage.getCruiseTypes();
    res.json(cruiseTypes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cruise types", error });
  }
};

const getDestinations = async (req: Request, res: Response) => {
  try {
    const destinations = await storage.getDestinations();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching destinations", error });
  }
};

const getFilterOptions = async (req: Request, res: Response) => {
  try {
    const filterOptions = await storage.getFilterOptions();
    res.json(filterOptions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching filter options", error });
  }
};

const toggleFavorite = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { isFavorite } = req.body;
    
    // Validate request body
    const schema = z.object({
      isFavorite: z.boolean(),
    });
    
    try {
      schema.parse(req.body);
    } catch (error) {
      return res.status(400).json({ message: "Invalid request body", error });
    }
    
    const cruise = await storage.getCruiseById(id);
    
    if (!cruise) {
      return res.status(404).json({ message: "Cruise not found" });
    }
    
    const updatedCruise = await storage.updateCruise(id, {
      ...cruise,
      isFavorite,
    });
    
    res.json(updatedCruise);
  } catch (error) {
    res.status(500).json({ message: "Error updating favorite status", error });
  }
};

export default {
  getCruises,
  getCruiseById,
  getCruiseTypes,
  getDestinations,
  getFilterOptions,
  toggleFavorite,
};
