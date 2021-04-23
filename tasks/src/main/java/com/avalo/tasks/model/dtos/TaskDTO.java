package com.avalo.tasks.model.dtos;

public class TaskDTO {
    private String description;

    private boolean state;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isState() {
        return state;
    }

    public void setState(boolean state) {
        this.state = state;
    }
    
}
