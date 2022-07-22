package com.Group5.Sprint1.Repositories;


import com.Group5.Sprint1.Models.TournamentModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TournamentRepository extends JpaRepository<TournamentModel, Integer> {
}
