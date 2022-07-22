package com.Group5.Sprint1.Repositories;


import com.Group5.Sprint1.Models.TeamModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<TeamModel, Integer> {
}

