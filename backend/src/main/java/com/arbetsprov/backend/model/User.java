package com.arbetsprov.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String charName;
    private String charClass;
    private String charDescription;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCharName() {
        return charName;
    }

    public void setCharName(String charName) {
        this.charName = charName;
    }

    public String getCharClass() {
        return charClass;
    }

    public void setCharClass(String charClass) {
        this.charClass = charClass;
    }

    public String getCharDescription() {
        return charDescription;
    }

    public void setCharDescription(String charDescription) {
        this.charDescription = charDescription;
    }
}
